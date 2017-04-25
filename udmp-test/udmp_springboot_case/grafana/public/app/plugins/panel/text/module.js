/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/plugins/sdk"],function(a,b){"use strict";var c,d,e,f=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(a){function b(b,d,e,f){var g=a.call(this,b,d)||this;return g.templateSrv=e,g.$sce=f,g.panelDefaults={mode:"markdown",content:"# title"},c.default.defaults(g.panel,g.panelDefaults),g.events.on("init-edit-mode",g.onInitEditMode.bind(g)),g.events.on("refresh",g.onRefresh.bind(g)),g.events.on("render",g.onRender.bind(g)),g}return f(b,a),b.$inject=["$scope","$injector","templateSrv","$sce"],b.prototype.onInitEditMode=function(){this.addEditorTab("Options","public/app/plugins/panel/text/editor.html"),this.editorTabIndex=1},b.prototype.onRefresh=function(){this.render()},b.prototype.onRender=function(){"markdown"===this.panel.mode?this.renderMarkdown(this.panel.content):"html"===this.panel.mode?this.updateContent(this.panel.content):"text"===this.panel.mode&&this.renderText(this.panel.content),this.renderingCompleted()},b.prototype.renderText=function(a){a=a.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/\n/g,"<br/>"),this.updateContent(a)},b.prototype.renderMarkdown=function(a){var b=this;return this.remarkable?void this.updateContent(this.remarkable.render(a)):System.import("remarkable").then(function(c){b.remarkable=new c,b.$scope.$apply(function(){b.updateContent(b.remarkable.render(a))})})},b.prototype.updateContent=function(a){try{this.content=this.$sce.trustAsHtml(this.templateSrv.replace(a,this.panel.scopedVars))}catch(b){console.log("Text panel error: ",b),this.content=this.$sce.trustAsHtml(a)}},b}(d.PanelCtrl),e.templateUrl="public/app/plugins/panel/text/module.html",a("TextPanelCtrl",e),a("PanelCtrl",e)}}});