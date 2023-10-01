import { NextFunction, Request, Response } from "express";
export declare namespace UserController {
    function registerUser(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    function loginUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    function findUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    function getUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
}
