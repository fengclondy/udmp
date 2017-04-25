/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","jquery","app/core/utils/file_export","app/plugins/sdk","./transformers","./editor","./renderer"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a}],execute:function(){j=function(a){function b(b,d,e,f){var g=a.call(this,b,d)||this;return g.annotationsSrv=e,g.$sanitize=f,g.panelDefaults={targets:[{}],transform:"timeseries_to_columns",pageSize:null,showHeader:!0,styles:[{type:"date",pattern:"Time",dateFormat:"YYYY-MM-DD HH:mm:ss"},{unit:"short",type:"number",decimals:2,colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],colorMode:null,pattern:"/.*/",thresholds:[]}],columns:[],scroll:!0,fontSize:"100%",sort:{col:0,desc:!0}},g.pageIndex=0,void 0===g.panel.styles&&(g.panel.styles=g.panel.columns,g.panel.columns=g.panel.fields,delete g.panel.columns,delete g.panel.fields),c.default.defaults(g.panel,g.panelDefaults),g.events.on("data-received",g.onDataReceived.bind(g)),g.events.on("data-error",g.onDataError.bind(g)),g.events.on("data-snapshot-load",g.onDataReceived.bind(g)),g.events.on("init-edit-mode",g.onInitEditMode.bind(g)),g.events.on("init-panel-actions",g.onInitPanelActions.bind(g)),g}return k(b,a),b.$inject=["$scope","$injector","annotationsSrv","$sanitize"],b.prototype.onInitEditMode=function(){this.addEditorTab("Options",h.tablePanelEditor,2)},b.prototype.onInitPanelActions=function(a){a.push({text:"Export CSV",click:"ctrl.exportCsv()"})},b.prototype.issueQueries=function(b){return this.pageIndex=0,"annotations"===this.panel.transform?(this.setTimeQueryStart(),this.annotationsSrv.getAnnotations({dashboard:this.dashboard,panel:this.panel,range:this.range}).then(function(a){return{data:a}})):a.prototype.issueQueries.call(this,b)},b.prototype.onDataError=function(a){this.dataRaw=[],this.render()},b.prototype.onDataReceived=function(a){this.dataRaw=a,this.pageIndex=0,this.dataRaw&&this.dataRaw.length&&("table"===this.dataRaw[0].type?this.panel.transform="table":"docs"===this.dataRaw[0].type?this.panel.transform="json":"table"!==this.panel.transform&&"json"!==this.panel.transform||(this.panel.transform="timeseries_to_rows")),this.render()},b.prototype.render=function(){return this.table=g.transformDataToTable(this.dataRaw,this.panel),this.table.sort(this.panel.sort),a.prototype.render.call(this,this.table)},b.prototype.toggleColumnSort=function(a,b){this.table.columns[this.panel.sort.col]&&(this.table.columns[this.panel.sort.col].sort=!1),this.panel.sort.col===b?this.panel.sort.desc?this.panel.sort.desc=!1:this.panel.sort.col=null:(this.panel.sort.col=b,this.panel.sort.desc=!0),this.render()},b.prototype.exportCsv=function(){var a=new i.TableRenderer(this.panel,this.table,this.dashboard.isTimezoneUtc(),this.$sanitize);e.exportTableDataToCsv(a.render_values())},b.prototype.link=function(a,b,c,e){function f(){var a=e.height;return n>1&&(a-=26),a-31+"px"}function g(a){var b=new i.TableRenderer(m,l,e.dashboard.isTimezoneUtc(),e.$sanitize);a.empty(),a.html(b.render(e.pageIndex))}function h(a){var b=d.default(a.currentTarget);e.pageIndex=parseInt(b.text(),10)-1,k()}function j(a){a.empty();var b=m.pageSize||100;if(n=Math.ceil(l.rows.length/b),1!==n){for(var c=Math.max(e.pageIndex-3,0),f=Math.min(n,c+9),g=d.default("<ul></ul>"),h=c;h<f;h++){var i=h===e.pageIndex?"active":"",j=d.default('<li><a class="table-panel-page-link pointer '+i+'">'+(h+1)+"</a></li>");g.append(j)}a.append(g)}}function k(){var a=b.parents(".panel"),c=b.find(".table-panel-scroll"),d=b.find("tbody"),e=b.find(".table-panel-footer");b.css({"font-size":m.fontSize}),a.addClass("table-panel-wrapper"),g(d),j(e),c.css({"max-height":m.scroll?f():""})}var l,m=e.panel,n=0;b.on("click",".table-panel-page-link",h);var o=a.$on("$destroy",function(){b.off("click",".table-panel-page-link"),o()});e.events.on("render",function(a){l=a||l,l&&k(),e.renderingCompleted()})},b}(f.MetricsPanelCtrl),j.templateUrl="module.html",a("TablePanelCtrl",j),a("PanelCtrl",j)}}});