import express from "express"
import { Express } from "express"

const app: Express = express()
const port = 8000

app.listen(port, () => {
  console.log(
    `Hey! Server up and running on port ${port}. Grab some chocolate milk!`
  )
})
