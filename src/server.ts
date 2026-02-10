import express from "express"
import { Express, Request, Response } from "express"

const app: Express = express()
const port = 8000

app.get("/", (req: Request, res: Response): void => {
  res.json({})
})
app.listen(port, (): void => {
  console.log(`Hey! Server up and running on port ${port}.`)
})
