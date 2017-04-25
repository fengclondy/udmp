/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["jquery","angular"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(){}return a.prototype.init=function(a,b){var c=this;this.enabled="development"===a.buildInfo.env,this.timings={},this.timings.appStart={loadStart:(new Date).getTime()},this.$rootScope=b,this.enabled&&(b.$watch(function(){return c.digestCounter++,!1},function(){}),b.onAppEvent("refresh",this.refresh.bind(this),b),b.onAppEvent("dashboard-fetch-end",this.dashboardFetched.bind(this),b),b.onAppEvent("dashboard-initialized",this.dashboardInitialized.bind(this),b),b.onAppEvent("panel-initialized",this.panelInitialized.bind(this),b))},a.prototype.refresh=function(){var a=this;this.timings.query=0,this.timings.render=0,setTimeout(function(){console.log("panel count: "+a.panelsInitCount),console.log("total query: "+a.timings.query),console.log("total render: "+a.timings.render),console.log("avg render: "+a.timings.render/a.panelsInitCount)},5e3)},a.prototype.dashboardFetched=function(){this.timings.dashboardLoadStart=(new Date).getTime(),this.panelsInitCount=0,this.digestCounter=0,this.panelsInitCount=0,this.panelsRendered=0,this.timings.query=0,this.timings.render=0},a.prototype.dashboardInitialized=function(){var a=this;setTimeout(function(){console.log("Dashboard::Performance Total Digests: "+a.digestCounter),console.log("Dashboard::Performance Total Watchers: "+a.getTotalWatcherCount()),console.log("Dashboard::Performance Total ScopeCount: "+a.scopeCount);var b=a.timings.lastPanelInitializedAt-a.timings.dashboardLoadStart;console.log("Dashboard::Performance All panels initialized in "+b+" ms");for(var c=window.performance.now(),d=0;d<30;d++)a.$rootScope.$apply();console.log("Dashboard::Performance Root Digest "+(window.performance.now()-c)/30)},3e3)},a.prototype.getTotalWatcherCount=function(){var a=0,b=0,e=c.default(document.getElementsByTagName("body")),f=function(e){e.data().hasOwnProperty("$scope")&&(b++,d.default.forEach(e.data().$scope.$$watchers,function(){a++})),d.default.forEach(e.children(),function(a){f(c.default(a))})};return f(e),this.scopeCount=b,a},a.prototype.renderingCompleted=function(a,b){this.panelsRendered=(this.panelsRendered||0)+1,this.$rootScope.panelsRendered=this.panelsRendered,this.enabled&&(b.renderEnd=(new Date).getTime(),this.timings.query+=b.queryEnd-b.queryStart,this.timings.render+=b.renderEnd-b.renderStart)},a.prototype.panelInitialized=function(){this.enabled&&(this.panelsInitCount++,this.timings.lastPanelInitializedAt=(new Date).getTime())},a}(),a("Profiler",e),f=new e,a("profiler",f)}}});