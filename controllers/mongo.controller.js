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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logchat_1 = __importDefault(require("../models/logchat"));
const host = "mongodb.railway.internal";
const port = "27017";
const user = "mongo";
const pass = "hkhhqTAPPkCqymnAgujqHnwsvlcyOmdf";
const name = "test";
class Mongo {
    static connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const mongoURI = "mongodb://mongo:hkhhqTAPPkCqymnAgujqHnwsvlcyOmdf@interchange.proxy.rlwy.net:23158";
            try {
                yield mongoose_1.default.connect(mongoURI);
                console.log('✅ Conectado a MongoDB');
            }
            catch (error) {
                console.error('❌ Error al conectar a MongoDB:', error);
            }
        });
    }
    static save(input, output) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield this.connectDB();
                const log = new logchat_1.default({ input: input, output: output });
                yield log.save();
                return "Guardado";
            }
            catch (error) {
                throw new Error(`Error al guardar en la base de datos: ${error.message}`);
            }
        });
    }
}
exports.Mongo = Mongo;
