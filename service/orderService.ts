const axios = require('axios');
import e = require("express");
import { Order } from "../model/order";

const orderValidator = require('../validator/orderValidator');


module.exports.getOrders = async function (): Promise<Order[]> {
    try {
        const response = await axios.get('http://localhost:8080/api/orders')

        return response.data
    } catch (e) {
        throw new Error('Could not get orders')
    }
}

module.exports.getOrderById = async function(id: number): Promise<Order> {
    try {
        const response = await axios.get('http://localhost:8080/api/orders/' + id)

        return response.data
    } catch (e) {
        throw new Error('Could not get order')
    }
}

module.exports.createOrder = async function (order:Order): Promise<number> {
    const error: string = orderValidator.validateProduct(order)

    if (error) {
        throw new Error(error)
    }

    try {
        const response = await axios.post('http://localhost:8080/api/orders', order)

        return response.data
    } catch (e) {
        throw new Error('Could not create order')
    }
}