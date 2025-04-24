import mongoose, { Schema, Document } from "mongoose";

export interface LogChat extends Document {
    input: string
    output: string
}

const logChatSchema: Schema = new Schema({
    input: { type: String, required: true },
    output: { type: String, required: true },
})

export default mongoose.model<LogChat>("LogChat", logChatSchema)