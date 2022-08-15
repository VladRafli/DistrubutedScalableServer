import { Request, Response } from "express";

export default class TestController {
    public static read(req: Request, res: Response) {
        res.status(200).json([
            {
                'name': 'Lorem'
            },
            {
                'name': 'ipsum'
            }
        ])
    }
}