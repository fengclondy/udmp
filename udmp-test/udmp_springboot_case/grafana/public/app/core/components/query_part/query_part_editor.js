/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","jquery","app/core/core_module"],function(a,b){"use strict";function c(a,b){var c='<input type="text" class="hide input-mini tight-form-func-param"></input>';return{restrict:"E",template:g,scope:{part:"=",handleEvent:"&"},link:function(a,f){function g(a){var b=e.default(this),c=b.next();c.val(n.params[a]),c.css("width",b.width()+16+"px"),b.hide(),c.show(),c.focus(),c.select();var d=c.data("typeahead");d&&(c.val(""),d.lookup())}function h(c){var d=e.default(this),f=d.prev(),g=d.val();(""!==g||n.def.params[c].optional)&&(f.html(b.highlightVariablesAsHtml(g)),n.updateParam(d.val(),c),a.$apply(function(){a.handleEvent({$event:{name:"part-param-changed"}})})),d.hide(),f.show()}function i(a,b){13===b.which&&h.call(this,a)}function j(){this.style.width=8*(3+this.value.length)+"px"}function k(b,c,f){if(c.options||c.dynamicLookup){var g=function(b,e){return c.options?c.options:void a.$apply(function(){a.handleEvent({$event:{name:"get-param-options"}}).then(function(a){var b=d.default.map(a,function(a){return a.value});e(b)})})};b.attr("data-provide","typeahead");var i=c.options;"int"===c.type&&(i=d.default.map(i,function(a){return a.toString()})),b.typeahead({source:g,minLength:0,items:1e3,updater:function(a){return setTimeout(function(){h.call(b[0],f)},0),a}});var j=b.data("typeahead");j.lookup=function(){this.query=this.$element.val()||"";var a=this.source(this.query,e.default.proxy(this.process,this));return a?this.process(a):a}}}function l(){d.default.each(o.params,function(a,f){if(!(a.optional&&n.params.length<=f)){f>0&&e.default("<span>, </span>").appendTo(p);var l=b.highlightVariablesAsHtml(n.params[f]),m=e.default('<a class="graphite-func-param-link pointer">'+l+"</a>"),o=e.default(c);m.appendTo(p),o.appendTo(p),o.blur(d.default.partial(h,f)),o.keyup(j),o.keypress(d.default.partial(i,f)),m.click(d.default.partial(g,f)),k(o,a,f)}})}function m(){p.empty(),l()}var n=a.part,o=n.def,p=f.find(".query-part-parameters");a.partActions=[],a.showActionsMenu=function(){a.handleEvent({$event:{name:"get-part-actions"}}).then(function(b){a.partActions=b})},a.triggerPartAction=function(b){a.handleEvent({$event:{name:"action",action:b}})},m()}}}c.$inject=["$compile","templateSrv"];b&&b.id;a("queryPartEditorDirective",c);var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g='\n<div class="dropdown cascade-open">\n<a ng-click="showActionsMenu()" class="query-part-name pointer dropdown-toggle" data-toggle="dropdown">{{part.def.type}}</a>\n<span>(</span><span class="query-part-parameters"></span><span>)</span>\n<ul class="dropdown-menu">\n  <li ng-repeat="action in partActions">\n    <a ng-click="triggerPartAction(action)">{{action.text}}</a>\n  </li>\n</ul>\n',f.default.directive("queryPartEditor",c)}}});