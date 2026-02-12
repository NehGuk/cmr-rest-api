import express from "express"
import { Express, Request, Response } from "express"
import cors from "cors"
import { ChocolateMilk, chocolateMilkList } from "./data/data-sample"

const app: Express = express()
const port = 8000

app.use(cors())

app.get("/api/:id", (req: Request, res: Response): void => {
  const { id } = req.params
  if (id) {
    const filteredData = chocolateMilkList.find(
      (item) => item.id === Number(id)
    )
    res.json(filteredData)
  } else {
    res.status(404).json({ message: "ID not found" })
  }
})

app.get("/api", (req: Request, res: Response): void => {
  const { countryOfOrigin } = req.query
  if (countryOfOrigin) {
    const filteredData = chocolateMilkList.filter(
      (item) =>
        item.countryOfOrigin.toLowerCase() ===
        countryOfOrigin.toString().toLowerCase()
    )
    res.json(filteredData)
  } else {
    res.json(chocolateMilkList)
  }
})

app.use((req, res) => {
  res.status(404).json({ message: "Not found" })
})

app.listen(port, (): void => {
  console.log(`Hey! Server up and running on port ${port}.`)
})
