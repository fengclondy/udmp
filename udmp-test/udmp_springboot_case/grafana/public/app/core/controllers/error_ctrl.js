/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","../core_module"],function(a,b){"use strict";b.default.controller("ErrorCtrl",["$scope","contextSrv",function(a,b){var c=b.sidemenu;b.sidemenu=!1,a.$on("$destroy",function(){a.contextSrv.sidemenu=c})}])});