import { parse } from "node:path"
import { chocolateMilkList } from "../data/data-sample"
import type { ChocolateMilk } from "../data/data-sample"
import type { Request, Response } from "express"

type ChocolateMilkQueryParams = {
  name?: string
  countryOfOrigin?: string
  description?: string
  rating?: string
  containsCoffee?: "true" | "false"
  isHotChocolate?: "true" | "false"
}

export const getChocolateMilks = (
  req: Request<{}, unknown, {}, ChocolateMilkQueryParams>,
  res: Response<ChocolateMilk[] | { message: string }>
) => {
  const { name, countryOfOrigin, rating, containsCoffee, isHotChocolate } =
    req.query
  let filteredData: ChocolateMilk[] = [...chocolateMilkList]

  if (name) {
    const parsedName: string = name.toLowerCase()
    filteredData = filteredData.filter(
      (item) => item.name.toLowerCase() === parsedName
    )
    if (filteredData.length === 0) {
      return res
        .status(404)
        .json({ message: "No chocolate milk found with the specified name." })
    }
  }

  if (countryOfOrigin) {
    const parsedCountryOfOrigin: string = countryOfOrigin.toLowerCase()
    filteredData = filteredData.filter(
      (item) => item.countryOfOrigin.toLowerCase() === parsedCountryOfOrigin
    )
    if (filteredData.length === 0) {
      return res.status(404).json({
        message:
          "No chocolate milk found with the specified country of origin.",
      })
    }
  }

  if (rating) {
    const parsedRating: number = Number(rating)
    if (isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
      return res.status(400).json({
        message: "Invalid rating. Please provide a value between 0 and 5.",
      })
    }
    filteredData = filteredData.filter((item) => item.rating === parsedRating)
  }

  if (containsCoffee) {
    const parsedContainsCoffee: boolean = containsCoffee === "true"
    filteredData = filteredData.filter(
      (item) => item.containsCoffee === parsedContainsCoffee
    )
    if (filteredData.length === 0) {
      return res.status(404).json({
        message: "No chocolate milk found with the specified coffee content.",
      })
    }
  }

  if (isHotChocolate) {
    const parsedIsHotChocolate: boolean = isHotChocolate === "true"
    filteredData = filteredData.filter(
      (item) => item.isHotChocolate === parsedIsHotChocolate
    )
    if (filteredData.length === 0) {
      return res.status(404).json({
        message: "No chocolate milk found with that characteristic.",
      })
    }
  }
  res.json(filteredData)
}

export const getChocolateMilkById = (
  req: Request<{ id: string }>,
  res: Response<ChocolateMilk | { message: string }>
): void => {
  const { id } = req.params
  if (id) {
    const filteredData = chocolateMilkList.find(
      (item) => item.id === Number(id)
    )
    res.json(filteredData)
  }
}
