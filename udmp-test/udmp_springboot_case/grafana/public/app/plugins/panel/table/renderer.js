/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","moment","app/core/utils/kbn"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d){this.panel=a,this.table=b,this.isUtc=c,this.sanitize=d,this.formaters=[],this.colorState={}}return a.prototype.getColorForValue=function(a,b){if(!b.thresholds)return null;for(var d=b.thresholds.length;d>0;d--)if(a>=b.thresholds[d-1])return b.colors[d];return c.default.first(b.colors)},a.prototype.defaultCellFormater=function(a,b){return null===a||void 0===a||void 0===a?"":(c.default.isArray(a)&&(a=a.join(", ")),b&&b.sanitize?this.sanitize(a):c.default.escape(a))},a.prototype.createColumnFormater=function(a,b){var f=this;if(!a)return this.defaultCellFormater;if("hidden"===a.type)return function(a){};if("date"===a.type)return function(b){if(void 0===b||null===b)return"-";c.default.isArray(b)&&(b=b[0]);var e=d.default(b);return f.isUtc&&(e=e.utc()),e.format(a.dateFormat)};if("number"===a.type){var g=e.default.valueFormats[b.unit||a.unit];return function(b){return null===b||void 0===b?"-":c.default.isString(b)?f.defaultCellFormater(b,a):(a.colorMode&&(f.colorState[a.colorMode]=f.getColorForValue(b,a)),g(b,a.decimals,null))}}return function(b){return f.defaultCellFormater(b,a)}},a.prototype.formatColumnValue=function(a,b){if(this.formaters[a])return this.formaters[a](b);for(var c=0;c<this.panel.styles.length;c++){var d=this.panel.styles[c],f=this.table.columns[a],g=e.default.stringToJsRegex(d.pattern);if(f.text.match(g))return this.formaters[a]=this.createColumnFormater(d,f),this.formaters[a](b)}return this.formaters[a]=this.defaultCellFormater,this.formaters[a](b)},a.prototype.renderCell=function(a,b,c){void 0===c&&(c=!1),b=this.formatColumnValue(a,b);var d="";this.colorState.cell?(d=' style="background-color:'+this.colorState.cell+';color: white"',this.colorState.cell=null):this.colorState.value&&(d=' style="color:'+this.colorState.value+'"',this.colorState.value=null);var e="";return c&&(e='<div class="table-panel-width-hack">'+this.table.columns[a].text+"</div>"),void 0===b?(d=' style="display:none;"',this.table.columns[a].hidden=!0):this.table.columns[a].hidden=!1,"<td"+d+">"+b+e+"</td>"},a.prototype.render=function(a){for(var b=this.panel.pageSize||100,c=a*b,d=Math.min(c+b,this.table.rows.length),e="",f=c;f<d;f++){for(var g=this.table.rows[f],h="",i="",j=0;j<this.table.columns.length;j++)h+=this.renderCell(j,g[j],f===c);this.colorState.row&&(i=' style="background-color:'+this.colorState.row+';color: white"',this.colorState.row=null),e+="<tr "+i+">"+h+"</tr>"}return e},a.prototype.render_values=function(){for(var a=[],b=0;b<this.table.rows.length;b++){for(var c=this.table.rows[b],d=[],e=0;e<this.table.columns.length;e++)d.push(this.formatColumnValue(e,c[e]));a.push(d)}return{columns:this.table.columns,rows:a}},a}(),a("TableRenderer",f)}}});