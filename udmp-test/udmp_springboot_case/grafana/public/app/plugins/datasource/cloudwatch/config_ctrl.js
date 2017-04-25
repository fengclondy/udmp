/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a,b){"use strict";var c;b&&b.id;return{setters:[],execute:function(){c=function(){function a(a){this.accessKeyExist=!1,this.secretKeyExist=!1,this.authTypes=[{name:"Access & secret key",value:"keys"},{name:"Credentials file",value:"credentials"},{name:"ARN",value:"arn"}],this.indexPatternTypes=[{name:"No pattern",value:void 0},{name:"Hourly",value:"Hourly",example:"[logstash-]YYYY.MM.DD.HH"},{name:"Daily",value:"Daily",example:"[logstash-]YYYY.MM.DD"},{name:"Weekly",value:"Weekly",example:"[logstash-]GGGG.WW"},{name:"Monthly",value:"Monthly",example:"[logstash-]YYYY.MM"},{name:"Yearly",value:"Yearly",example:"[logstash-]YYYY"}],this.current.jsonData.timeField=this.current.jsonData.timeField||"@timestamp",this.current.jsonData.authType=this.current.jsonData.authType||"credentials",this.accessKeyExist=this.current.secureJsonFields.accessKey,this.secretKeyExist=this.current.secureJsonFields.secretKey}return a.$inject=["$scope"],a.prototype.resetAccessKey=function(){this.accessKeyExist=!1},a.prototype.resetSecretKey=function(){this.secretKeyExist=!1},a}(),c.templateUrl="partials/config.html",a("CloudWatchConfigCtrl",c)}}});