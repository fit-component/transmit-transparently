"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var others_1 = require('../others');
var clone = function (obj) {
    switch (obj.constructor.name) {
        case 'Object':
            var copyObject = {};
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    copyObject[key] = clone(obj[key]);
                }
            }
            return copyObject;
        case 'Array':
            var copyArray = new Array(obj.length);
            for (var i = 0, l = obj.length; i < l; i++) {
                copyArray[i] = clone(obj[i]);
            }
            return copyArray;
        case 'RegExp':
            var flags = '';
            flags += obj.multiline ? 'm' : '';
            flags += obj.global ? 'g' : '';
            flags += obj.ignoreCase ? 'i' : '';
            return new RegExp(obj.source, flags);
        case 'Date':
            return new Date(obj.getTime());
        default:
            return obj;
    }
};
exports.__esModule = true;
exports["default"] = function (Target) {
    var Transmit = (function (_super) {
        __extends(Transmit, _super);
        function Transmit(props) {
            _super.call(this, props);
            this.state = {
                others: {}
            };
        }
        Transmit.prototype.componentWillMount = function () {
            this.state.others = others_1["default"](Target.defaultProps, this.props);
        };
        Transmit.prototype.render = function () {
            var newProps = clone(this.props);
            newProps.others = this.state.others;
            return React.createElement(Target, newProps, this.props.children);
        };
        return Transmit;
    }(React.Component));
    var func = function () {
        return Transmit;
    };
    return func();
};
