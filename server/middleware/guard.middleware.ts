import { NextFunction, Request, Response } from "express";
import AuthProvider from "../provider/auth.provider";

export default function guard(role: String|Array<String>) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (role instanceof Array<String>) {
            if (role.indexOf(AuthProvider.role) !== -1) return next()
        } else if (role instanceof String) {
            if (role === AuthProvider.role) return next()
        }
        
        res.status(403).json({ msg: 'Forbidden! User had not enough previlege to access this route!' })
        return
    }
}