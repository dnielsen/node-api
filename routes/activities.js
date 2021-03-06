var Type = require('../type'),
    Resource = require('../resource'),
    common = require('../common'),
    __ = require('underscore');

var spec = {
    tableName : 'events',
    primary_key : 'event_pk',
    schema : {
        "event_id" : { type : Type.Int, props : ["default", "read_only"]},
        "parent_message_id" : { type : Type.Str, props : ["default"]},
        "message_id" : { type : Type.Str, props : ["default"]},
        "interface_name" : { type : Type.Str, props : ["default"]},
        "process_id" : { type : Type.Str, props : ["default"]},
        "process_name" : { type : Type.Str, props : ["default"]},
        "timestamp" : { type : Type.Int, props : ["default"]},
        "enterprise" : { type : Type.Str, props : ["default"]},
        "environment" : { type : Type.Str, props : ["default"]},
        "status" : { type : Type.Str, props : ["default"]},
        "flow_name" : { type : Type.Str, props : ["default"]},
        "action": {type: Type.Str, props: ["default"]},
        "format": {type: Type.Str, props: ["default"]},
        "protocol": {type: Type.Str, props: ["default"]}
    }
};

var resource = new Resource(spec);
Type.User.init(resource);

exports.find_all = function (req, resp, next) {
    return resource.find_all(req, resp, next);
};

exports.find_by_primary_key = function (req, resp, next) {
    return resource.find_by_primary_key(req, resp, next);
};

exports.find_all_by_range = function (req, resp, next) {
    return resource.find_all_by_range(req, resp, next);
};

exports.data_source = function (req, resp, next) {
    return resource.distinct_keys('process_name', function(event_result) {
        resource.distinct_keys('process_event', function(object_result) {
            resource.data_source(req, resp, next, null, {
                events: event_result,
                objects: object_result
            });
        });
    });
};

