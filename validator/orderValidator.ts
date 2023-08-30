import { Order } from "../model/order";

module.exports.validateOrder = function (order: Order): string {
    
    const currentDate = new Date();
    const pastOneYearDate = new Date();

    pastOneYearDate.setFullYear(currentDate.getFullYear()-1);

    if (!(order.orderDate >= pastOneYearDate && order.orderDate <= currentDate)) {
        return "Invalid order date"
    }

    return null
}