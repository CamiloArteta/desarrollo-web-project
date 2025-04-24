import mongoose from "mongoose"
import logchat from "../models/logchat"

const host = "mongodb.railway.internal"
const port = "27017"
const user = "mongo"
const pass = "hkhhqTAPPkCqymnAgujqHnwsvlcyOmdf"
const name = "test"

export class Mongo {
    static async connectDB(): Promise<void> {
        const mongoURI = "mongodb://mongo:hkhhqTAPPkCqymnAgujqHnwsvlcyOmdf@interchange.proxy.rlwy.net:23158"
        try {
          await mongoose.connect(mongoURI);
          console.log('✅ Conectado a MongoDB');
        } catch (error) {
          console.error('❌ Error al conectar a MongoDB:', error)
        }
    }

    static async save(input: string, output: string): Promise<any> {
        try {
            const conn = await this.connectDB()

            const log = new logchat({input: input, output: output})
            await log.save()

            return "Guardado"
        } catch (error: any) {
            throw new Error(`Error al guardar en la base de datos: ${error.message}`)
        }
    }
}

