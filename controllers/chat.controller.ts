export class Chat {
    static async chat(message: string, sessionId: string): Promise<void> {
        const chat = await fetch("http://54.173.193.122:5678/webhook/product/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chatInput: message,
                sessionId: sessionId,
            })
        })
        const chatResponse = await chat.json();

        return chatResponse;
    }
}