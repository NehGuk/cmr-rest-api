import express from "express"
import { Express, Request, Response } from "express"
import cors from "cors"
import { chocolateMilkList } from "./data/data-sample.js"

const app: Express = express()
const port = 8000

app.use(cors())

app.get("/api", (req: Request, res: Response): void => {
  res.json(chocolateMilkList)
})

app.get("/api/:id", (req: Request, res: Response): void => {
  const { id } = req.params
  const filteredData = chocolateMilkList.find((item) => item.id === Number(id))
  res.json(filteredData)
  res.status(404).json({ message: "ID not found" })
})

app.use((req, res) => {
  res.status(404).json({ message: "Not found" })
})

app.listen(port, (): void => {
  console.log(`Hey! Server up and running on port ${port}.`)
})
