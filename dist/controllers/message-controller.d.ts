import { NextFunction, Request, Response } from "express";
export declare namespace MessageController {
    function createMessage(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    function getMessagesOfAChat(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
