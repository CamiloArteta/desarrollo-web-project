import express, { Request, Response  } from 'express';
import { chatRouter } from './routes/chat.routes';

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());

app.use('/manage', chatRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('This is my project in Express with TypeScript, lets start conding baby!')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})