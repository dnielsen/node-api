var Type = require('../type'),
    Resource = require('../resource'),
    common = require('../common'),
    __ = require('underscore');

var spec = {
    tableName : 'events',
    primary_key : 'event_id',
    schema : {
        "event_id" : { type : Type.Int, props : ["default", "read_only"]},
        "timestamp" : { type : Type.Int, props : ["default"]},
        "process_name" : { type : Type.Str, props : ["default"]},
        "process_method" : { type : Type.Str, props : ["default"]},
        "environment" : { type : Type.Str, props : ["default"]},
        "object_group_id" : { type : Type.Str, props : ["default"]},
        "severity" : { type : Type.Str, props : ["default"]}
    }
};

var resource = new Resource(spec);
Type.User.init(resource);

exports.data_source = function (req, resp, next) {
    return resource.data_source(req, resp, next, null);
};
