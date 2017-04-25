/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["lodash"],function(a){"use strict";return{metricAggTypes:[{text:"Count",value:"count",requiresField:!1},{text:"Average",value:"avg",requiresField:!0,supportsInlineScript:!0,supportsMissing:!0},{text:"Sum",value:"sum",requiresField:!0,supportsInlineScript:!0,supportsMissing:!0},{text:"Max",value:"max",requiresField:!0,supportsInlineScript:!0,supportsMissing:!0},{text:"Min",value:"min",requiresField:!0,supportsInlineScript:!0,supportsMissing:!0},{text:"Extended Stats",value:"extended_stats",requiresField:!0,supportsMissing:!0,supportsInlineScript:!0},{text:"Percentiles",value:"percentiles",requiresField:!0,supportsMissing:!0,supportsInlineScript:!0},{text:"Unique Count",value:"cardinality",requiresField:!0,supportsMissing:!0},{text:"Moving Average",value:"moving_avg",requiresField:!1,isPipelineAgg:!0,minVersion:2},{text:"Derivative",value:"derivative",requiresField:!1,isPipelineAgg:!0,minVersion:2},{text:"Raw Document",value:"raw_document",requiresField:!1}],bucketAggTypes:[{text:"Terms",value:"terms",requiresField:!0},{text:"Filters",value:"filters"},{text:"Geo Hash Grid",value:"geohash_grid",requiresField:!0},{text:"Date Histogram",value:"date_histogram",requiresField:!0}],orderByOptions:[{text:"Doc Count",value:"_count"},{text:"Term value",value:"_term"}],orderOptions:[{text:"Top",value:"desc"},{text:"Bottom",value:"asc"}],sizeOptions:[{text:"No limit",value:"0"},{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"5",value:"5"},{text:"10",value:"10"},{text:"15",value:"15"},{text:"20",value:"20"}],extendedStats:[{text:"Avg",value:"avg"},{text:"Min",value:"min"},{text:"Max",value:"max"},{text:"Sum",value:"sum"},{text:"Count",value:"count"},{text:"Std Dev",value:"std_deviation"},{text:"Std Dev Upper",value:"std_deviation_bounds_upper"},{text:"Std Dev Lower",value:"std_deviation_bounds_lower"}],intervalOptions:[{text:"auto",value:"auto"},{text:"10s",value:"10s"},{text:"1m",value:"1m"},{text:"5m",value:"5m"},{text:"10m",value:"10m"},{text:"20m",value:"20m"},{text:"1h",value:"1h"},{text:"1d",value:"1d"}],movingAvgModelOptions:[{text:"Simple",value:"simple"},{text:"Linear",value:"linear"},{text:"Exponentially Weighted",value:"ewma"},{text:"Holt Linear",value:"holt"},{text:"Holt Winters",value:"holt_winters"}],pipelineOptions:{moving_avg:[{text:"window",default:5},{text:"model",default:"simple"},{text:"predict",default:void 0},{text:"minimize",default:!1}],derivative:[{text:"unit",default:void 0}]},movingAvgModelSettings:{simple:[],linear:[],ewma:[{text:"Alpha",value:"alpha",default:void 0}],holt:[{text:"Alpha",value:"alpha",default:void 0},{text:"Beta",value:"beta",default:void 0}],holt_winters:[{text:"Alpha",value:"alpha",default:void 0},{text:"Beta",value:"beta",default:void 0},{text:"Gamma",value:"gamma",default:void 0},{text:"Period",value:"period",default:void 0},{text:"Pad",value:"pad",default:void 0,isCheckbox:!0}]},getMetricAggTypes:function(b){return a.filter(this.metricAggTypes,function(a){return!a.minVersion||a.minVersion<=b})},getPipelineOptions:function(a){return this.isPipelineAgg(a.type)?this.pipelineOptions[a.type]:[]},isPipelineAgg:function(a){if(a){var b=this.pipelineOptions[a];return null!==b&&void 0!==b}return!1},getPipelineAggOptions:function(b){var c=this,d=[];return a.each(b.metrics,function(a){c.isPipelineAgg(a.type)||d.push({text:c.describeMetric(a),value:a.id})}),d},getMovingAvgSettings:function(b,c){var d=[];return c?(a.each(this.movingAvgModelSettings[b],function(a){a.isCheckbox||d.push(a)}),d):this.movingAvgModelSettings[b]},getOrderByOptions:function(b){var c=this,d=[];return a.each(b.metrics,function(a){"count"!==a.type&&d.push({text:c.describeMetric(a),value:a.id})}),this.orderByOptions.concat(d)},describeOrder:function(b){var c=a.find(this.orderOptions,{value:b});return c.text},describeMetric:function(b){var c=a.find(this.metricAggTypes,{value:b.type});return c.text+" "+b.field},describeOrderBy:function(b,c){var d=a.find(this.orderByOptions,{value:b});if(d)return d.text;var e=a.find(c.metrics,{id:b});return e?this.describeMetric(e):"metric not found"}}});