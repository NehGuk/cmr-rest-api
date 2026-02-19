import express from "express"
import { Express } from "express"
import cors from "cors"
import { chocolateMilkRouter } from "./routes/routes"

const app: Express = express()
const PORT = process.env.PORT || 8080

app.use(cors())

app.use("/api", chocolateMilkRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" })
})

app.listen(PORT, (): void => {
  console.log(`Hey! Server up and running on port ${PORT}.`)
})
