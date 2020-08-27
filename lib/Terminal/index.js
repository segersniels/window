"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var Terminal = function (props) {
    var children = props.children, style = props.style, _a = props.light, light = _a === void 0 ? false : _a;
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Bar, { light: light },
            react_1.default.createElement(styles_1.Wrapper, null,
                react_1.default.createElement(styles_1.Button, { color: "#f85955" }),
                react_1.default.createElement(styles_1.Button, { color: "#fbbe3f" }),
                react_1.default.createElement(styles_1.Button, { color: "#45cc4b" }))),
        react_1.default.createElement(styles_1.Window, { style: style, light: light }, children)));
};
exports.default = Terminal;
