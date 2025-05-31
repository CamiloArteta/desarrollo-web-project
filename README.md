# desarrollo-web-project

## Descripción general

Este proyecto es una API REST construida con **Express** y **TypeScript** que permite interactuar con un chatbot y guardar los logs de las conversaciones en una base de datos MongoDB. El flujo principal consiste en recibir mensajes de un usuario, enviarlos a un servicio externo de chatbot, devolver la respuesta al usuario y almacenar tanto la entrada como la salida en la base de datos.

---

## Estructura de carpetas y archivos

- **index.ts**: Punto de entrada de la aplicación. Configura el servidor Express y las rutas principales.
- **routes/chat.routes.ts**: Define las rutas relacionadas con el chatbot.
- **controllers/chat.controller.ts**: Lógica para interactuar con el servicio externo de chatbot y guardar logs.
- **controllers/mongo.controller.ts**: Lógica para conectar y guardar datos en MongoDB.
- **models/logchat.ts**: Esquema de Mongoose para almacenar logs de chat.

---

## Explicación de los componentes principales

### 1. [index.ts](index.ts)

- Inicializa una aplicación Express.
- Usa el middleware `express.json()` para parsear JSON en las peticiones.
- Monta el router de chat en `/manage`.
- Define una ruta raíz `/` que responde con un mensaje de bienvenida.
- Inicia el servidor en el puerto especificado.

### 2. [routes/chat.routes.ts](routes/chat.routes.ts)

- Define el router `chatRouter`.
- Expone el endpoint `POST /manage/productos` que recibe `chatInput` y `sessionId` en el body.
- Llama a [`Chat.chat`](controllers/chat.controller.ts) para procesar el mensaje y responde con el resultado o un error.

### 3. [controllers/chat.controller.ts](controllers/chat.controller.ts)

- Contiene la clase `Chat` con el método estático `chat`.
- Este método:
  - Envía el mensaje recibido a un servicio externo de chatbot mediante `fetch`.
  - Espera la respuesta del chatbot.
  - Llama a [`Mongo.save`](controllers/mongo.controller.ts) para guardar el mensaje y la respuesta en la base de datos.
  - Devuelve la respuesta del chatbot.

### 4. [controllers/mongo.controller.ts](controllers/mongo.controller.ts)

- Contiene la clase `Mongo` con métodos estáticos para conectar a la base de datos y guardar logs.
- `connectDB`: Establece la conexión con MongoDB usando Mongoose.
- `save`: Llama a `connectDB`, crea un nuevo documento usando el modelo [`logchat`](models/logchat.ts) y lo guarda en la base de datos.

### 5. [models/logchat.ts](models/logchat.ts)

- Define el esquema de Mongoose para los logs de chat.
- Cada documento tiene dos campos obligatorios: `input` (mensaje del usuario) y `output` (respuesta del chatbot).

---

## Flujo de funcionamiento

1. El usuario realiza una petición `POST` a `/manage/productos` con un mensaje y un `sessionId`.
2. El router llama al método `chat` de la clase `Chat`.
3. El método `chat` envía el mensaje al servicio externo y espera la respuesta.
4. La entrada y la salida se guardan en MongoDB usando el modelo `LogChat`.
5. Se responde al usuario con la salida del chatbot.

---

## Dependencias principales

- **express**: Framework para el servidor HTTP.
- **mongoose**: ODM para MongoDB.
- **typescript**: Tipado estático para JavaScript.
- **@types/\***: Tipos para desarrollo en TypeScript.

---

## Ejemplo de petición

```json
POST /manage/productos
Content-Type: application/json

{
  "chatInput": "Hola, ¿qué productos tienes?",
  "sessionId": "12345"
}
```