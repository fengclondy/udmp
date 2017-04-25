/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","angular","app/core/core_module"],function(a,b){"use strict";function c(){return{restrict:"E",template:h,controller:g,bindToController:!0,controllerAs:"ctrl",scope:{variable:"="}}}b&&b.id;a("adHocFiltersComponent",c);var d,e,f,g,h;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b,c,d,e){this.uiSegmentSrv=a,this.datasourceSrv=b,this.$q=c,this.templateSrv=d,this.$rootScope=e,this.removeTagFilterSegment=a.newSegment({fake:!0,value:"-- remove filter --"}),this.buildSegmentModel()}return a.$inject=["uiSegmentSrv","datasourceSrv","$q","templateSrv","$rootScope"],a.prototype.buildSegmentModel=function(){this.segments=[],this.variable.value&&!d.default.isArray(this.variable.value);for(var a=0,b=this.variable.filters;a<b.length;a++){var c=b[a];this.segments.length>0&&this.segments.push(this.uiSegmentSrv.newCondition("AND")),void 0!==c.key&&void 0!==c.value&&(this.segments.push(this.uiSegmentSrv.newKey(c.key)),this.segments.push(this.uiSegmentSrv.newOperator(c.operator)),this.segments.push(this.uiSegmentSrv.newKeyValue(c.value)))}this.segments.push(this.uiSegmentSrv.newPlusButton())},a.prototype.getOptions=function(a,b){var c=this;return"operator"===a.type?this.$q.when(this.uiSegmentSrv.newOperators(["=","!=","<",">","=~","!~"])):"condition"===a.type?this.$q.when([this.uiSegmentSrv.newSegment("AND")]):this.datasourceSrv.get(this.variable.datasource).then(function(f){var g={},h=null;return"value"!==a.type?h=f.getTagKeys():(g.key=c.segments[b-2].value,h=f.getTagValues(g)),h.then(function(b){return b=d.default.map(b,function(a){return c.uiSegmentSrv.newSegment({value:a.text})}),"key"===a.type&&b.splice(0,0,e.default.copy(c.removeTagFilterSegment)),b})})},a.prototype.segmentChanged=function(a,b){this.segments[b]=a,a.value===this.removeTagFilterSegment.value?(this.segments.splice(b,3),0===this.segments.length?this.segments.push(this.uiSegmentSrv.newPlusButton()):this.segments.length>2&&(this.segments.splice(Math.max(b-1,0),1),"plus-button"!==this.segments[this.segments.length-1].type&&this.segments.push(this.uiSegmentSrv.newPlusButton()))):("plus-button"===a.type&&(b>2&&this.segments.splice(b,0,this.uiSegmentSrv.newCondition("AND")),this.segments.push(this.uiSegmentSrv.newOperator("=")),this.segments.push(this.uiSegmentSrv.newFake("select tag value","value","query-segment-value")),a.type="key",a.cssClass="query-segment-key"),b+1===this.segments.length&&this.segments.push(this.uiSegmentSrv.newPlusButton())),this.updateVariableModel()},a.prototype.updateVariableModel=function(){var a=[],b=-1,c=!1;this.segments.forEach(function(d){if("value"===d.type&&d.fake)return void(c=!0);switch(d.type){case"key":a.push({key:d.value}),b+=1;break;case"value":a[b].value=d.value;break;case"operator":a[b].operator=d.value;break;case"condition":a[b].condition=d.value}}),c||(this.variable.setFilters(a),this.$rootScope.$emit("template-variable-value-updated"),this.$rootScope.$broadcast("refresh"))},a}(),a("AdHocFiltersCtrl",g),h='\n<div class="gf-form-inline">\n  <div class="gf-form" ng-repeat="segment in ctrl.segments">\n    <metric-segment segment="segment" get-options="ctrl.getOptions(segment, $index)"\n                    on-change="ctrl.segmentChanged(segment, $index)"></metric-segment>\n  </div>\n</div>\n',f.default.directive("adHocFilters",c)}}});