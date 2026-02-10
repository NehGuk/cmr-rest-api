import express from "express"
import { Express, Request, Response } from "express"
import cors from "cors"

const app: Express = express()
const port = 8000

app.use(cors())
app.get("/", (req: Request, res: Response): void => {
  res.json({ name: "Cocio", countryOfOrigin: "Denmark" })
})
app.use((req, res) => {
  res.status(404).json({ message: "Not found" })
})
app.listen(port, (): void => {
  console.log(`Hey! Server up and running on port ${port}.`)
})
