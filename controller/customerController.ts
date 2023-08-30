import { Customer } from "../model/customer";
import { Application, Request, Response } from "express";

const customerService = require('../service/customerService')

module.exports = function(app: Application): void {
    app.get('/customers', async(req: Request, res: Response) : Promise<void> => {
        let data: Customer[];

        try {
            data = await customerService.getCustomers();
        } catch (e) {
            console.error(e);
        }

        res.render('add-order', {
            customer: data,
        })
    }
)}
