/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a,b){"use strict";var c;b&&b.id;return{setters:[],execute:function(){c=function(){function a(a){this.backendSrv=a,this.appEditCtrl.setPreUpdateHook(this.initDatasource.bind(this))}return a.$inject=["backendSrv"],a.prototype.initDatasource=function(){var a=this;return this.backendSrv.get("/api/datasources").then(function(b){for(var c=!1,d=0,e=b;d<e.length;d++){var f=e[d];"grafana-testdata-datasource"===f.type&&(c=!0)}if(!c){var g={name:"Grafana TestData",type:"grafana-testdata-datasource",access:"direct",jsonData:{}};return a.backendSrv.post("/api/datasources",g)}return Promise.resolve()})},a}(),c.template="",a("ConfigCtrl",c)}}});