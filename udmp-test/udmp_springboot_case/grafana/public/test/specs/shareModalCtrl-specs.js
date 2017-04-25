/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["./helpers","app/features/dashboard/shareModalCtrl","app/features/panellinks/linkSrv"],function(a){"use strict";describe("ShareModalCtrl",function(){function b(a){c.timeSrv.timeRange=sinon.stub().returns(a)}var c=new a.ControllerTestContext;b({from:new Date(1e3),to:new Date(2e3)}),beforeEach(module("grafana.controllers")),beforeEach(module("grafana.services")),beforeEach(c.providePhase()),beforeEach(c.createControllerPhase("ShareModalCtrl")),describe("shareUrl with current time range and panel",function(){it("should generate share url absolute time",function(){c.$location.path("/test"),c.scope.panel={id:22},c.scope.init(),expect(c.scope.shareUrl).to.be("http://server/#/test?from=1000&to=2000&panelId=22&fullscreen")}),it("should generate render url",function(){c.$location.$$absUrl="http://dashboards.grafana.com/dashboard/db/my-dash",c.scope.panel={id:22},c.scope.init();var a="http://dashboards.grafana.com/render/dashboard-solo/db/my-dash",b="?from=1000&to=2000&panelId=22&width=1000&height=500";expect(c.scope.imageUrl).to.be(a+b)}),it("should remove panel id when no panel in scope",function(){c.$location.path("/test"),c.scope.options.forCurrent=!0,c.scope.panel=null,c.scope.init(),expect(c.scope.shareUrl).to.be("http://server/#/test?from=1000&to=2000")}),it("should add theme when specified",function(){c.$location.path("/test"),c.scope.options.theme="light",c.scope.panel=null,c.scope.init(),expect(c.scope.shareUrl).to.be("http://server/#/test?from=1000&to=2000&theme=light")}),it("should include template variables in url",function(){c.$location.path("/test"),c.scope.options.includeTemplateVars=!0,c.templateSrv.fillVariableValuesForUrl=function(a){a["var-app"]="mupp",a["var-server"]="srv-01"},c.scope.buildUrl(),expect(c.scope.shareUrl).to.be("http://server/#/test?from=1000&to=2000&var-app=mupp&var-server=srv-01")})})})});