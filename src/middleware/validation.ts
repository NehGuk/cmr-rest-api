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

export const validatecountry_of_origin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { country_of_origin } = req.query

  if (country_of_origin !== undefined) {
    if (typeof country_of_origin !== "string") {
      return res
        .status(400)
        .json({ message: "Country of origin must be a single string." })
    }

    if (country_of_origin.trim() === "") {
      return res
        .status(400)
        .json({ message: "Country of origin cannot be empty." })
    }

    if (country_of_origin.length > 200) {
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

export const validatecontains_coffee = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { contains_coffee } = req.query
  if (contains_coffee !== undefined) {
    if (contains_coffee !== "true" && contains_coffee !== "false") {
      return res.status(400).json({
        message: "Value for contains_coffee must be either 'true' or 'false'.",
      })
    }
  }
  next()
}

export const validateis_hot_chocolate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { is_hot_chocolate } = req.query
  if (is_hot_chocolate !== undefined) {
    if (is_hot_chocolate !== "true" && is_hot_chocolate !== "false") {
      return res.status(400).json({
        message: "Value for is_hot_chocolate must be either 'true' or 'false'.",
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
