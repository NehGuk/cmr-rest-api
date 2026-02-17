import express from "express"
import type { Router } from "express"
import {
  getChocolateMilkById,
  getChocolateMilks,
} from "../controllers/controllers"

export const chocolateMilkRouter: Router = express.Router()

chocolateMilkRouter.get("/", getChocolateMilks)
chocolateMilkRouter.get("/:id", getChocolateMilkById)
