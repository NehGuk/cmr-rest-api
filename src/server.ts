import express from "express"
import { Express, Request, Response } from "express"

const app: Express = express()
const port = 8000

app.get("/", (req: Request, res: Response): void => {
  res.json({ name: "Coccio", countryOfOrigin: "Denmark" })
})
app.listen(port, (): void => {
  console.log(`Hey! Server up and running on port ${port}.`)
})
