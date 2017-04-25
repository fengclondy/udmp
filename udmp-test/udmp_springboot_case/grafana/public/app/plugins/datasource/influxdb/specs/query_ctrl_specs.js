/*! grafana - v4.1.2 - 2017-02-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../query_ctrl","app/core/services/segment_srv","test/lib/common","test/specs/helpers"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){e=a},function(a){},function(a){c=a},function(a){d=a}],execute:function(){c.describe("InfluxDBQueryCtrl",function(){var a=new d.default.ControllerTestContext;c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.controllers")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(a.providePhase()),c.beforeEach(c.angularMocks.inject(function(b,d,f){a.$q=f,a.scope=b.$new(),a.datasource.metricFindQuery=c.sinon.stub().returns(a.$q.when([])),a.panelCtrl={panel:{}},a.panelCtrl.refresh=c.sinon.spy(),a.target={target:{}},a.ctrl=d(e.InfluxQueryCtrl,{$scope:a.scope},{panelCtrl:a.panelCtrl,target:a.target,datasource:a.datasource})})),c.describe("init",function(){c.it("should init tagSegments",function(){c.expect(a.ctrl.tagSegments.length).to.be(1)}),c.it("should init measurementSegment",function(){c.expect(a.ctrl.measurementSegment.value).to.be("select measurement")})}),c.describe("when first tag segment is updated",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0)}),c.it("should update tag key",function(){c.expect(a.ctrl.target.tags[0].key).to.be("asd"),c.expect(a.ctrl.tagSegments[0].type).to.be("key")}),c.it("should add tagSegments",function(){c.expect(a.ctrl.tagSegments.length).to.be(3)})}),c.describe("when last tag value segment is updated",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2)}),c.it("should update tag value",function(){c.expect(a.ctrl.target.tags[0].value).to.be("server1")}),c.it("should set tag operator",function(){c.expect(a.ctrl.target.tags[0].operator).to.be("=")}),c.it("should add plus button for another filter",function(){c.expect(a.ctrl.tagSegments[3].fake).to.be(!0)})}),c.describe("when last tag value segment is updated to regex",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"/server.*/",type:"value"},2)}),c.it("should update operator",function(){c.expect(a.ctrl.tagSegments[1].value).to.be("=~"),c.expect(a.ctrl.target.tags[0].operator).to.be("=~")})}),c.describe("when second tag key is added",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3)}),c.it("should update tag key",function(){c.expect(a.ctrl.target.tags[1].key).to.be("key2")}),c.it("should add AND segment",function(){c.expect(a.ctrl.tagSegments[3].value).to.be("AND")})}),c.describe("when condition is changed",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3),a.ctrl.tagSegmentUpdated({value:"OR",type:"condition"},3)}),c.it("should update tag condition",function(){c.expect(a.ctrl.target.tags[1].condition).to.be("OR")}),c.it("should update AND segment",function(){c.expect(a.ctrl.tagSegments[3].value).to.be("OR"),c.expect(a.ctrl.tagSegments.length).to.be(7)})}),c.describe("when deleting first tag filter after value is selected",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated(a.ctrl.removeTagFilterSegment,0)}),c.it("should remove tags",function(){c.expect(a.ctrl.target.tags.length).to.be(0)}),c.it("should remove all segment after 2 and replace with plus button",function(){c.expect(a.ctrl.tagSegments.length).to.be(1),c.expect(a.ctrl.tagSegments[0].type).to.be("plus-button")})}),c.describe("when deleting second tag value before second tag value is complete",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3),a.ctrl.tagSegmentUpdated(a.ctrl.removeTagFilterSegment,4)}),c.it("should remove all segment after 2 and replace with plus button",function(){c.expect(a.ctrl.tagSegments.length).to.be(4),c.expect(a.ctrl.tagSegments[3].type).to.be("plus-button")})}),c.describe("when deleting second tag value before second tag value is complete",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3),a.ctrl.tagSegmentUpdated(a.ctrl.removeTagFilterSegment,4)}),c.it("should remove all segment after 2 and replace with plus button",function(){c.expect(a.ctrl.tagSegments.length).to.be(4),c.expect(a.ctrl.tagSegments[3].type).to.be("plus-button")})}),c.describe("when deleting second tag value after second tag filter is complete",function(){c.beforeEach(function(){a.ctrl.tagSegmentUpdated({value:"asd",type:"plus-button"},0),a.ctrl.tagSegmentUpdated({value:"server1",type:"value"},2),a.ctrl.tagSegmentUpdated({value:"key2",type:"plus-button"},3),a.ctrl.tagSegmentUpdated({value:"value",type:"value"},6),a.ctrl.tagSegmentUpdated(a.ctrl.removeTagFilterSegment,4)}),c.it("should remove all segment after 2 and replace with plus button",function(){c.expect(a.ctrl.tagSegments.length).to.be(4),c.expect(a.ctrl.tagSegments[3].type).to.be("plus-button")})})})}}});