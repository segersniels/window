"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.Wrapper = exports.Window = exports.Bar = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Color;
(function (Color) {
    Color["Light"] = "#E5E5E5";
    Color["Dark"] = "rgb(40, 44, 52)";
})(Color || (Color = {}));
var getBackgroundColor = function (light) {
    return light ? Color.Light : Color.Dark;
};
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  * {\n    line-height: 1.3em;\n    letter-spacing: 0;\n  }\n"], ["\n  position: relative;\n\n  * {\n    line-height: 1.3em;\n    letter-spacing: 0;\n  }\n"])));
exports.Bar = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  height: 2.3rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  background: ", ";\n  height: 2.3rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])), function (props) { return getBackgroundColor(props.light); });
exports.Window = styled_components_1.default.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: ", ";\n  padding: 0rem 0.55rem 0.55rem 0.55rem;\n  max-width: 100%;\n  border-radius: 0 0 0.5rem 0.5rem;\n  overflow: auto;\n"], ["\n  background: ", ";\n  padding: 0rem 0.55rem 0.55rem 0.55rem;\n  max-width: 100%;\n  border-radius: 0 0 0.5rem 0.5rem;\n  overflow: auto;\n"])), function (props) { return getBackgroundColor(props.light); });
exports.Wrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 1rem;\n  left: 0;\n  display: flex;\n"], ["\n  position: absolute;\n  top: 1rem;\n  left: 0;\n  display: flex;\n"])));
exports.Button = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-left: 1rem;\n  background: ", ";\n  box-shadow: 0 0 0 0.2rem ", ";\n"], ["\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-left: 1rem;\n  background: ", ";\n  box-shadow: 0 0 0 0.2rem ", ";\n"])), function (props) { return props.color; }, function (props) { return props.color; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
