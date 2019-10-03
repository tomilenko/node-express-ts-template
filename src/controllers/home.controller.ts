import { Request, Response } from "express";

export class HomeController {

    constructor() { }

    public indexAction = (req: Request, res: Response) => {
        res.json({
            controller: "HomeController"
        });
    }
};