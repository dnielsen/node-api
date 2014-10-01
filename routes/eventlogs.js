var Type = require('../type'),
    Resource = require('../resource'),
    common = require('../common'),
    __ = require('underscore');

var spec = {
    tableName : 'event_log',
    primary_key : 'event_log_id',
    schema : {
        "event_log_id" : { type : Type.Int, props : ["default", "read_only"]},
        "timestamp" : { type : Type.Int, props : ["default"]},
        "workflow" : { type : Type.Str, props : ["default"]},
        "process" : { type : Type.Str, props : ["default"]},
        "object" : { type : Type.Str, props : ["default"]},
        "object_id" : { type : Type.Str, props : ["default"]},
        "severity" : { type : Type.Str, props : ["default"]}
    }
};

var resource = new Resource(spec);
Type.User.init(resource);

exports.data_source = function (req, resp, next) {
    return resource.data_source(req, resp, next, null);
};
