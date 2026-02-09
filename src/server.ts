import express from "express"
import { Express } from "express"

const app: Express = express()
const port = 8000

app.listen(port, (): void => {
  console.log(`Hey! Server up and running on port ${port}.`)
})
