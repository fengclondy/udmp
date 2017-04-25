/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","jquery","../core_module"],function(a,b,c,d){"use strict";d.default.controller("InspectCtrl",["$scope","$sanitize",function(d,e){function f(a){for(var b=[],c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");e[1].length>0&&b.push({key:e[0],value:window.unescape(e[1])})}return b}var g=d.inspector;d.init=function(){d.editor={index:0},g.error&&(b.isString(g.error.data)?d.response=c("<div>"+g.error.data+"</div>").text():g.error.data?g.error.data.response?d.response=e(g.error.data.response):d.response=a.toJson(g.error.data,!0):g.error.message&&(d.message=g.error.message),g.error.config&&g.error.config.params&&(d.request_parameters=b.map(g.error.config.params,function(a,b){return{key:b,value:a}})),g.error.stack&&(d.editor.index=3,d.stack_trace=g.error.stack,d.message=g.error.message),g.error.config&&g.error.config.data&&(d.editor.index=2,b.isString(g.error.config.data)?d.request_parameters=f(g.error.config.data):d.request_parameters=b.map(g.error.config.data,function(b,c){return{key:c,value:a.toJson(b,!0)}})))}}])});