"use strict";
exports.__esModule = true;
var GTemplage = function (obj) {
    var params = obj.values.map(function (v) {
        var name = Object.keys(v)[0];
        var type = v[name];
        return "$" + name + ":" + type;
    }).join(',');
    var paramsIn = obj.values.map(function (v) {
        var name = Object.keys(v)[0];
        return name + ":$" + name;
    }).join(',');
    return "\n    " + obj.type + " " + obj.name + " (" + params + "){\n        " + obj.name + "(" + paramsIn + ")" + renderReturn(obj["return"]) + "\n    }\n";
};
function renderReturn(array) {
    if (array && array.length > 0) {
        console.log('exsits ');
        return "{\n            " + array.join('\n') + "\n            }\n        ";
    }
    console.log('not exsits');
    return '';
}
exports["default"] = GTemplage;
