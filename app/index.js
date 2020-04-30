import express from "express"
import morgan from "morgan"
import { useVideosRouter } from "./modules"

const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())
app.use(express.static(`public`))

useVideosRouter(app)

export default app