/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","moment","test/specs/helpers","../datasource","../metric_find_query"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){c.describe("PrometheusMetricFindQuery",function(){var a=new e.default.ServiceTestContext,b={url:"proxied",directUrl:"direct",user:"test",password:"mupp"};c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.inject(function(c,d,e,g){a.$q=c,a.$httpBackend=e,a.$rootScope=d,a.ds=g.instantiate(f.PrometheusDatasource,{instanceSettings:b}),e.when("GET",/\.html$/).respond("")})),c.describe("When performing metricFindQuery",function(){var b,e;c.it("label_values(resource) should generate label search query",function(){e={status:"success",data:["value1","value2","value3"]},a.$httpBackend.expect("GET","proxied/api/v1/label/resource/values").respond(e);var d=new g.default(a.ds,"label_values(resource)",a.timeSrv);d.process().then(function(a){b=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),c.expect(b.length).to.be(3)}),c.it("label_values(metric, resource) should generate series query",function(){e={status:"success",data:[{__name__:"metric",resource:"value1"},{__name__:"metric",resource:"value2"},{__name__:"metric",resource:"value3"}]},a.$httpBackend.expect("GET",/proxied\/api\/v1\/series\?match\[\]=metric&start=.*&end=.*/).respond(e);var d=new g.default(a.ds,"label_values(metric, resource)",a.timeSrv);d.process().then(function(a){b=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),c.expect(b.length).to.be(3)}),c.it("label_values(metric, resource) should pass correct time",function(){a.timeSrv.setTime({from:d.default.utc("2011-01-01"),to:d.default.utc("2015-01-01")}),a.$httpBackend.expect("GET",/proxied\/api\/v1\/series\?match\[\]=metric&start=1293840000&end=1420070400/).respond(e);var c=new g.default(a.ds,"label_values(metric, resource)",a.timeSrv);c.process().then(function(a){b=a}),a.$httpBackend.flush(),a.$rootScope.$apply()}),c.it('label_values(metric{label1="foo", label2="bar", label3="baz"}, resource) should generate series query',function(){e={status:"success",data:[{__name__:"metric",resource:"value1"},{__name__:"metric",resource:"value2"},{__name__:"metric",resource:"value3"}]},a.$httpBackend.expect("GET",/proxied\/api\/v1\/series\?match\[\]=metric&start=.*&end=.*/).respond(e);var d=new g.default(a.ds,"label_values(metric, resource)",a.timeSrv);d.process().then(function(a){b=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),c.expect(b.length).to.be(3)}),c.it("metrics(metric.*) should generate metric name query",function(){e={status:"success",data:["metric1","metric2","metric3","nomatch"]},a.$httpBackend.expect("GET","proxied/api/v1/label/__name__/values").respond(e);var d=new g.default(a.ds,"metrics(metric.*)",a.timeSrv);d.process().then(function(a){b=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),c.expect(b.length).to.be(3)}),c.it("query_result(metric) should generate metric name query",function(){e={status:"success",data:{resultType:"vector",result:[{metric:{__name__:"metric",job:"testjob"},value:[1443454528,"3846"]}]}},a.$httpBackend.expect("GET",/proxied\/api\/v1\/query\?query=metric&time=.*/).respond(e);var d=new g.default(a.ds,"query_result(metric)",a.timeSrv);d.process().then(function(a){b=a}),a.$httpBackend.flush(),a.$rootScope.$apply(),c.expect(b.length).to.be(1),c.expect(b[0].text).to.be('metric{job="testjob"} 3846 1443454528000')})})})}}});