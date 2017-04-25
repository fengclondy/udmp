/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","app/core/config","app/core/core"],function(a,b){"use strict";var c,d,e,f,g,h,i,j;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=[],h={name:"",type:"graphite",url:"",access:"proxy",jsonData:{},secureJsonFields:{}},i=!1,j=function(){function a(a,b,c,d,e,f){var g=this;this.$scope=a,this.$q=b,this.backendSrv=c,this.$routeParams=d,this.$location=e,this.datasourceSrv=f,this.isNew=!0,this.datasources=[],this.tabIndex=0,this.loadDatasourceTypes().then(function(){g.$routeParams.id?g.getDatasourceById(g.$routeParams.id):g.initNewDatasourceModel()})}return a.$inject=["$scope","$q","backendSrv","$routeParams","$location","datasourceSrv"],a.prototype.initNewDatasourceModel=function(){this.current=c.default.copy(h),this.$location.search().gettingstarted&&(this.gettingStarted=!0,this.current.isDefault=!0),this.typeChanged()},a.prototype.loadDatasourceTypes=function(){var a=this;return g.length>0?(this.types=g,this.$q.when(null)):this.backendSrv.get("/api/plugins",{enabled:1,type:"datasource"}).then(function(b){g=b,a.types=b})},a.prototype.getDatasourceById=function(a){var b=this;this.backendSrv.get("/api/datasources/"+a).then(function(a){return b.isNew=!1,b.current=a,i&&(i=!1,b.testDatasource()),b.typeChanged()})},a.prototype.typeChanged=function(){var a=this;return this.hasDashboards=!1,this.backendSrv.get("/api/plugins/"+this.current.type+"/settings").then(function(b){a.datasourceMeta=b,a.hasDashboards=d.default.find(b.includes,{type:"dashboard"})})},a.prototype.updateFrontendSettings=function(){var a=this;return this.backendSrv.get("/api/frontend/settings").then(function(b){e.default.datasources=b.datasources,e.default.defaultDatasource=b.defaultDatasource,a.datasourceSrv.init()})},a.prototype.testDatasource=function(){var a=this;this.testing={done:!1},this.datasourceSrv.get(this.current.name).then(function(b){return b.testDatasource?b.testDatasource().then(function(b){a.testing.message=b.message,a.testing.status=b.status,a.testing.title=b.title}).catch(function(b){b.statusText?(a.testing.message=b.statusText,a.testing.title="HTTP Error"):(a.testing.message=b.message,a.testing.title="Unknown error")}):void delete a.testing}).finally(function(){a.testing&&(a.testing.done=!0)})},a.prototype.saveChanges=function(){var a=this;if(this.editForm.$valid)return this.current.id?this.backendSrv.put("/api/datasources/"+this.current.id,this.current).then(function(){a.updateFrontendSettings().then(function(){a.testDatasource()})}):this.backendSrv.post("/api/datasources",this.current).then(function(b){a.updateFrontendSettings(),i=!0,a.$location.path("datasources/edit/"+b.id)})},a.prototype.confirmDelete=function(){var a=this;this.backendSrv.delete("/api/datasources/"+this.current.id).then(function(){a.$location.path("datasources")})},a.prototype.delete=function(a){var b=this;f.appEvents.emit("confirm-modal",{title:"Delete",text:"Are you sure you want to delete this datasource?",yesText:"Delete",icon:"fa-trash",onConfirm:function(){b.confirmDelete()}})},a}(),a("DataSourceEditCtrl",j),f.coreModule.controller("DataSourceEditCtrl",j),f.coreModule.directive("datasourceHttpSettings",function(){return{scope:{current:"=",suggestUrl:"@"},templateUrl:"public/app/features/plugins/partials/ds_http_settings.html",link:{pre:function(a,b,c){a.getSuggestUrls=function(){return[a.suggestUrl]}}}}})}}});