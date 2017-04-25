/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module"],function(a,b){"use strict";function c(){return{restrict:"E",controller:f,bindToController:!0,controllerAs:"ctrl",template:e}}b&&b.id;a("colorPicker",c);var d,e,f;return{setters:[function(a){d=a}],execute:function(){e='\n<div class="graph-legend-popover">\n  <div ng-show="ctrl.series" class="p-b-1">\n    <label>Y Axis:</label>\n    <button ng-click="ctrl.toggleAxis(yaxis);" class="btn btn-small"\n            ng-class="{\'btn-success\': ctrl.series.yaxis === 1,\n                       \'btn-inverse\': ctrl.series.yaxis === 2}">\n      Left\n    </button>\n    <button ng-click="ctrl.toggleAxis(yaxis);"\n      class="btn btn-small"\n      ng-class="{\'btn-success\': ctrl.series.yaxis === 2,\n                 \'btn-inverse\': ctrl.series.yaxis === 1}">\n      Right\n    </button>\n  </div>\n\n  <p class="m-b-0">\n   <i ng-repeat="color in ctrl.colors" class="pointer fa fa-circle"\n    ng-style="{color:color}"\n    ng-click="ctrl.colorSelected(color);">&nbsp;</i>\n  </p>\n</div>\n',f=function(){function a(a,b){this.$scope=a,this.$rootScope=b,this.colors=b.colors,this.autoClose=a.autoClose,this.series=a.series}return a.$inject=["$scope","$rootScope"],a.prototype.toggleAxis=function(a){this.$scope.toggleAxis(),this.$scope.autoClose&&this.$scope.dismiss()},a.prototype.colorSelected=function(a){this.$scope.colorSelected(a),this.$scope.autoClose&&this.$scope.dismiss()},a}(),a("ColorPickerCtrl",f),d.default.directive("gfColorPicker",c)}}});