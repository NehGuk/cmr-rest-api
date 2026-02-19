import { Request, Response, NextFunction } from "express"

export const validateName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.query

  if (name !== undefined) {
    if (typeof name !== "string") {
      return res.status(400).json({ message: "Name must be a single string." })
    }

    if (name.trim() === "") {
      return res.status(400).json({ message: "Name cannot be empty." })
    }

    if (name.length > 200) {
      return res
        .status(400)
        .json({ message: "Name cannot be longer than 200 characters" })
    }
  }
  next()
}

export const validateCountryOfOrigin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { countryOfOrigin } = req.query

  if (countryOfOrigin !== undefined) {
    if (typeof countryOfOrigin !== "string") {
      return res
        .status(400)
        .json({ message: "Country of origin must be a single string." })
    }

    if (countryOfOrigin.trim() === "") {
      return res
        .status(400)
        .json({ message: "Country of origin cannot be empty." })
    }

    if (countryOfOrigin.length > 200) {
      return res.status(400).json({
        message: "Country of origin cannot be longer than 200 characters",
      })
    }
  }
  next()
}

export const validateRating = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { rating } = req.query

  if (rating !== undefined) {
    const parsedRating: number = Number(rating)
    if (isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
      return res.status(400).json({
        message: "Invalid rating. Please provide a value between 0 and 5.",
      })
    }
  }
  next()
}

export const validateContainsCoffee = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { containsCoffee } = req.query
  if (containsCoffee !== undefined) {
    if (containsCoffee !== "true" && containsCoffee !== "false") {
      return res.status(400).json({
        message: "Value for containsCoffee must be either 'true' or 'false'.",
      })
    }
  }
  next()
}

export const validateIsHotChocolate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isHotChocolate } = req.query
  if (isHotChocolate !== undefined) {
    if (isHotChocolate !== "true" && isHotChocolate !== "false") {
      return res.status(400).json({
        message: "Value for isHotChocolate must be either 'true' or 'false'.",
      })
    }
  }
  next()
}

export const validateID = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  if (isNaN(Number(id)) || Number(id) <= 0) {
    return res.status(400).json({ message: "ID must be a valid number" })
  }
  next()
}
