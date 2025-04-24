"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
const chat_controller_1 = require("../controllers/chat.controller");
const express_1 = require("express");
exports.chatRouter = (0, express_1.Router)();
exports.chatRouter.post("/productos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { chatInput, sessionId } = req.body;
    try {
        const response = yield chat_controller_1.Chat.chat(chatInput, sessionId);
        return res.status(200).send({
            status: "success",
            message: response,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "error",
            message: error.message,
        });
    }
}));
