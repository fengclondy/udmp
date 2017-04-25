/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","moment"],function(a,b){"use strict";function c(a,b){if(a){if(g.default.isMoment(a))return a;if(f.default.isDate(a))return g.default(a);var c,d,h,i="";return"now"===a.substring(0,3)?(c=g.default(),i=a.substring("now".length)):(d=a.indexOf("||"),d===-1?(h=a,i=""):(h=a.substring(0,d),i=a.substring(d+2)),c=g.default(h,g.default.ISO_8601)),i.length?e(i,c,b):c}}function d(a){var b=c(a);return!!b&&(!!g.default.isMoment(b)&&b.isValid())}function e(a,b,c){for(var d=b,e=0,g=a.length;e<g;){var i,j,k,l=a.charAt(e++);if("/"===l)i=0;else if("+"===l)i=1;else{if("-"!==l)return;i=2}if(isNaN(a.charAt(e)))j=1;else if(2===a.length)j=a.charAt(e);else{for(var m=e;!isNaN(a.charAt(e));)if(e++,e>10)return;j=parseInt(a.substring(m,e),10)}if(0===i&&1!==j)return;if(k=a.charAt(e++),!f.default.includes(h,k))return;0===i?c?d.endOf(k):d.startOf(k):1===i?d.add(j,k):2===i&&d.subtract(j,k)}return d}b&&b.id;a("parse",c),a("isValid",d),a("parseDateMath",e);var f,g,h;return{setters:[function(a){f=a},function(a){g=a}],execute:function(){h=["y","M","w","d","h","m","s"]}}});