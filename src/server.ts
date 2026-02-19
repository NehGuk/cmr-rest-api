import express from "express"
import { Express } from "express"
import cors from "cors"
import { chocolateMilkRouter } from "./routes/routes"

const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use("/api", chocolateMilkRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" })
})

app.listen(port, (): void => {
  console.log(`Hey! Server up and running on port ${port}.`)
})
