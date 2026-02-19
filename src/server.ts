import express from "express"
import { Express } from "express"
import cors from "cors"
import { chocolateMilkRouter } from "./routes/routes"
import {
  apiRateLimiterMiddleware,
  rateLimiterMiddleware,
} from "./middleware/rateLimiter"

const app: Express = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(rateLimiterMiddleware)

app.use("/api", apiRateLimiterMiddleware, chocolateMilkRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" })
})

app.listen(PORT, (): void => {
  console.log(`Hey! Server up and running on port ${PORT}.`)
})
