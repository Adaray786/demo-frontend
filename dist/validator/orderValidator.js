"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports.validateOrder = function (order) {
    var currentDate = new Date();
    var pastOneYearDate = new Date();
    pastOneYearDate.setFullYear(currentDate.getFullYear() - 1);
    if (!(order.orderDate >= pastOneYearDate && order.orderDate <= currentDate)) {
        return "Invalid order date";
    }
    return null;
};
//# sourceMappingURL=orderValidator.js.map