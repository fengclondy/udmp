/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["jquery","lodash","../core_module"],function(a,b,c){"use strict";c.default.directive("annotationTooltip",["$sanitize","dashboardSrv","$compile",function(c,d,e){function f(a){try{return c(a)}catch(c){return console.log("Could not sanitize annotation string, html escaping instead"),b.escape(a)}}return{link:function(c,g){var h=c.event,i=f(h.title),j=d.getCurrent(),k="<i>"+j.formatDate(h.min)+"</i>",l='<div class="graph-annotation">';if(l+='<div class="graph-annotation-title">'+i+"</div>",h.text){var m=f(h.text);l+=m.replace(/\n/g,"<br>")+"<br>"}var n=h.tags;b.isString(h.tags)&&(n=h.tags.split(","),1===n.length&&(n=h.tags.split(" "))),n&&n.length&&(c.tags=n,l+='<span class="label label-tag small" ng-repeat="tag in tags" tag-color-from-name="tag">{{tag}}</span><br/>'),l+='<div class="graph-annotation-time">'+k+"</div>",l+="</div>";var o=a(l);o.appendTo(g),e(g.contents())(c)}}}])});