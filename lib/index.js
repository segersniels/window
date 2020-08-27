"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_syntax_highlighter_1 = __importDefault(require("react-syntax-highlighter"));
var atom_one_dark_reasonable_1 = __importDefault(require("react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable"));
var Terminal_1 = __importDefault(require("./Terminal"));
var Window = function (props) {
    var children = props.children, style = props.style, language = props.language, _a = props.light, light = _a === void 0 ? false : _a, value = props.value;
    var content = value !== null && value !== void 0 ? value : children;
    if (typeof content === 'string') {
        return (react_1.default.createElement(Terminal_1.default, { style: style, light: light },
            react_1.default.createElement(react_syntax_highlighter_1.default, { style: atom_one_dark_reasonable_1.default, language: language }, content)));
    }
    return (react_1.default.createElement(Terminal_1.default, { style: style, light: light }, content));
};
exports.default = Window;
