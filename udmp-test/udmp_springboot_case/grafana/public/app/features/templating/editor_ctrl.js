/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/core_module","./variable"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,d,f){this.$scope=a,this.datasourceSrv=b,this.variableSrv=d,a.variableTypes=e.variableTypes,a.ctrl={},a.refreshOptions=[{value:0,text:"Never"},{value:1,text:"On Dashboard Load"},{value:2,text:"On Time Range Change"}],a.sortOptions=[{value:0,text:"Disabled"},{value:1,text:"Alphabetical (asc)"},{value:2,text:"Alphabetical (desc)"},{value:3,text:"Numerical (asc)"},{value:4,text:"Numerical (desc)"}],a.hideOptions=[{value:0,text:""},{value:1,text:"Label"},{value:2,text:"Variable"}],a.init=function(){a.mode="list",a.datasources=c.default.filter(b.getMetricSources(),function(a){return!a.meta.builtIn&&null!==a.value}),a.datasourceTypes=c.default(a.datasources).uniqBy("meta.id").map(function(a){return{text:a.meta.name,value:a.meta.id}}).value(),a.variables=d.variables,a.reset(),a.$watch("mode",function(b){"new"===b&&a.reset()})},a.add=function(){a.isValid()&&(a.variables.push(a.current),a.update(),a.dashboard.updateSubmenuVisibility())},a.isValid=function(){if(a.ctrl.form.$valid){if(!a.current.name.match(/^\w+$/))return a.appEvent("alert-warning",["Validation","Only word and digit characters are allowed in variable names"]),!1;var b=c.default.find(a.variables,{name:a.current.name});return!b||b===a.current||(a.appEvent("alert-warning",["Validation","Variable with the same name already exists"]),!1)}},a.validate=function(){a.infoText="","adhoc"===a.current.type&&null!==a.current.datasource&&(a.infoText="Adhoc filters are applied automatically to all queries that target this datasource",b.get(a.current.datasource).then(function(b){b.getTagKeys||(a.infoText="This datasource does not support adhoc filters yet.")}))},a.runQuery=function(){return d.updateOptions(a.current).then(null,function(b){b.data&&b.data.message&&(b.message=b.data.message),a.appEvent("alert-error",["Templating","Template variables could not be initialized: "+b.message])})},a.edit=function(b){a.current=b,a.currentIsNew=!1,a.mode="edit",a.validate()},a.duplicate=function(b){var e=c.default.cloneDeep(b.getSaveModel());a.current=d.createVariableFromModel(e),a.variables.push(a.current),a.current.name="copy_of_"+b.name,a.dashboard.updateSubmenuVisibility()},a.update=function(){a.isValid()&&a.runQuery().then(function(){a.reset(),a.mode="list",f.updateTemplateData()})},a.reset=function(){a.currentIsNew=!0,a.current=d.createVariableFromModel({type:"query"})},a.typeChanged=function(){var b=a.current;a.current=d.createVariableFromModel({type:a.current.type}),a.current.name=b.name,a.current.hide=b.hide,a.current.label=b.label;var e=c.default.indexOf(this.variables,b);e!==-1&&(this.variables[e]=a.current),a.validate()},a.removeVariable=function(b){var d=c.default.indexOf(a.variables,b);a.variables.splice(d,1),a.dashboard.updateSubmenuVisibility()}}return a.$inject=["$scope","datasourceSrv","variableSrv","templateSrv"],a}(),a("VariableEditorCtrl",f),d.default.controller("VariableEditorCtrl",f)}}});