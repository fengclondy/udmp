/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/config","app/core/core","./options","./add_panel"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){},function(a){}],execute:function(){f=function(){function a(a,b,c){this.$scope=a,this.$rootScope=b,this.$timeout=c,this.row.title=this.row.title||"Row title",this.row.isNew&&(this.dropView=1)}return a.$inject=["$scope","$rootScope","$timeout"],a.prototype.onDrop=function(a,b){var e,f=this;e=c.default.isString(a)?{row:this.row,panel:{title:d.default.new_panel_title,type:a,id:this.dashboard.getNextPanelId(),isNew:!0}}:this.dashboard.getPanelInfoById(a),b?(b=this.dashboard.getPanelInfoById(b.id),e.panel.isNew?(e.panel.span=b.panel.span=b.panel.span/2,b.row.panels.splice(b.index+1,0,e.panel)):this.row===e.row?this.row.movePanel(e.index,b.index):(e.panel.span=b.panel.span=b.panel.span/2,b.row.panels.splice(b.index+1,0,e.panel),e.row.removePanel(e.panel,!1))):(e.panel.span=12-this.row.span,this.row.panels.push(e.panel),e.panel.isNew||e.row.removePanel(e.panel,!1)),this.dropView=0,this.row.panelSpanChanged(),this.$timeout(function(){f.$rootScope.$broadcast("render")})},a.prototype.setHeight=function(a){this.row.height=a,this.$scope.$broadcast("render")},a.prototype.moveRow=function(a){var b=this.dashboard.rows,d=c.default.indexOf(b,this.row),e=d+a;e>=0&&e<=b.length-1&&c.default.move(b,d,e)},a.prototype.toggleCollapse=function(){this.closeDropView(),this.row.collapse=!this.row.collapse},a.prototype.onMenuAddPanel=function(){this.dropView=1},a.prototype.onMenuRowOptions=function(){this.dropView=2},a.prototype.closeDropView=function(){this.dropView=0},a.prototype.onMenuDeleteRow=function(){this.dashboard.removeRow(this.row)},a}(),a("DashRowCtrl",f),e.coreModule.directive("dashRow",["$rootScope",function(a){return{restrict:"E",templateUrl:"public/app/features/dashboard/row/row.html",controller:f,bindToController:!0,controllerAs:"ctrl",scope:{dashboard:"=",row:"="},link:function(b,d){b.$watchGroup(["ctrl.row.collapse","ctrl.row.height"],function(){d.toggleClass("dash-row--collapse",b.ctrl.row.collapse),d.find(".panels-wrapper").css({minHeight:b.ctrl.row.collapse?"5px":b.ctrl.row.height})}),a.onAppEvent("panel-fullscreen-enter",function(a,e){var f=c.default.find(b.ctrl.row.panels,{id:e.panelId});f||d.hide()},b),a.onAppEvent("panel-fullscreen-exit",function(){d.show()},b)}}}]),e.coreModule.directive("panelWidth",["$rootScope",function(a){return function(b,c){function d(){e||(c[0].style.width=b.panel.span/1.2*10+"%")}var e=!1;a.onAppEvent("panel-fullscreen-enter",function(a,d){e=!0,b.panel.id!==d.panelId?c.hide():c[0].style.width="100%"},b),a.onAppEvent("panel-fullscreen-exit",function(a,f){e=!1,b.panel.id!==f.panelId&&c.show(),d()},b),b.$watch("panel.span",d),e&&c.hide()}}]),e.coreModule.directive("panelDropZone",["$timeout",function(a){return function(a,b){function c(a,c){b.find(".panel-container").css("height",f.height),b[0].style.width=a/1.2*10+"%",h.text(c),b.show()}function d(){b.hide()}function e(){if(0===f.panels.length&&g===!1)return c(12,"Empty Space");var a=12-f.span;if(a>0)return g?c(a,"Drop Here"):c(a,"Empty Space");if(g===!0){var a=12-f.span;if(a>1)return c(a,"Drop Here")}d()}var f=a.ctrl.row,g=(a.ctrl.dashboard,!1),h=b.find(".panel-drop-zone-text");f.events.on("span-changed",e,a),a.$on("ANGULAR_DRAG_START",function(){g=!0,e()}),a.$on("ANGULAR_DRAG_END",function(){g=!1,e()}),e()}}])}}});