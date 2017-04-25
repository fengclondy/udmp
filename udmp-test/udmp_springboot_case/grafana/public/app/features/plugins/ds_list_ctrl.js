/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../../core/core_module"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a}],execute:function(){d=function(){function a(a,b,c,d,e){var f=this;this.$scope=a,this.$location=b,this.$http=c,this.backendSrv=d,this.datasourceSrv=e,d.get("/api/datasources").then(function(a){f.datasources=a})}return a.$inject=["$scope","$location","$http","backendSrv","datasourceSrv"],a.prototype.removeDataSourceConfirmed=function(a){var b=this;this.backendSrv.delete("/api/datasources/"+a.id).then(function(){b.$scope.appEvent("alert-success",["Datasource deleted",""])},function(){b.$scope.appEvent("alert-error",["Unable to delete datasource",""])}).then(function(){b.backendSrv.get("/api/datasources").then(function(a){b.datasources=a}),b.backendSrv.get("/api/frontend/settings").then(function(a){b.datasourceSrv.init(a.datasources)})})},a.prototype.removeDataSource=function(a){var b=this;this.$scope.appEvent("confirm-modal",{title:"Delete",text:"Are you sure you want to delete datasource "+a.name+"?",yesText:"Delete",icon:"fa-trash",onConfirm:function(){b.removeDataSourceConfirmed(a)}})},a}(),a("DataSourcesCtrl",d),c.default.controller("DataSourcesCtrl",d)}}});