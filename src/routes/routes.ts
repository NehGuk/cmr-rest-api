import express from "express"
import type { Router } from "express"
import {
  getChocolateMilkById,
  getChocolateMilks,
} from "../controllers/controllers"
import {
  validateRating,
  validateName,
  validatecountry_of_origin,
  validatecontains_coffee,
  validateis_hot_chocolate,
  validateID,
} from "../middleware/validation"

export const chocolateMilkRouter: Router = express.Router()

chocolateMilkRouter.get(
  "/",
  validateName,
  validatecountry_of_origin,
  validateRating,
  validatecontains_coffee,
  validateis_hot_chocolate,
  getChocolateMilks
)
chocolateMilkRouter.get("/:id", validateID, getChocolateMilkById)
