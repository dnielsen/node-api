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
    }
};

var resource = new Resource(spec);
Type.User.init(resource);

var get_now = function () {
    return new Date();
};

exports.find_all = function (req, resp, next) {
    return resource.find_all(req, resp, next);
};

exports.find_by_primary_key = function (req, resp, next) {
    return resource.find_by_primary_key(req, resp, next);
};


