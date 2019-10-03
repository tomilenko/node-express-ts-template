import { Request, Response } from "express";

export class UserController {

    constructor() { }

    public indexAction = (req: Request, res: Response) => {
        res.json({
            controller: "UserController"
        });
    }
};