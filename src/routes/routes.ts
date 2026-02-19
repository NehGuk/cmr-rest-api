import express from "express"
import type { Router } from "express"
import {
  getChocolateMilkById,
  getChocolateMilks,
} from "../controllers/controllers"
import {
  validateRating,
  validateName,
  validateCountryOfOrigin,
  validateContainsCoffee,
  validateIsHotChocolate,
  validateID,
} from "../middleware/validation"

export const chocolateMilkRouter: Router = express.Router()

chocolateMilkRouter.get(
  "/",
  validateName,
  validateCountryOfOrigin,
  validateRating,
  validateContainsCoffee,
  validateIsHotChocolate,
  getChocolateMilks
)
chocolateMilkRouter.get("/:id", validateID, getChocolateMilkById)
