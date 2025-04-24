import { Chat } from "../controllers/chat.controller";
import { Router } from "express";
import { Request, Response } from "express";

export const chatRouter: Router = Router();

chatRouter.post("/productos", async (req: Request, res: Response): Promise<any> => {
    const { chatInput, sessionId } = req.body
    
    try {
        const response: any = await Chat.chat(chatInput, sessionId);
    
        return res.status(200).send({
            status: "success",
            message: response,
        })
    } catch (error: any) {
        return res.status(500).send({
            status: "error",
            message: error.message,
        })
    }
})