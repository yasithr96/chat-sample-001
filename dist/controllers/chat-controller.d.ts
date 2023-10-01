import { NextFunction, Request, Response } from "express";
export declare namespace ChatController {
    function createChat(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    function getUserChats(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    function findChat(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    function samplereq(req: Request, res: Response, next: NextFunction): Promise<void>;
}
