import { chocolateMilkList } from "../data/data"
import type { ChocolateMilk } from "../data/data"
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
  }

  if (countryOfOrigin) {
    const parsedCountryOfOrigin: string = countryOfOrigin.toLowerCase()
    filteredData = filteredData.filter(
      (item) => item.countryOfOrigin.toLowerCase() === parsedCountryOfOrigin
    )
  }

  if (rating) {
    const parsedRating: number = Number(rating)
    filteredData = filteredData.filter((item) => item.rating === parsedRating)
  }

  if (containsCoffee) {
    const parsedContainsCoffee: boolean = containsCoffee === "true"
    filteredData = filteredData.filter(
      (item) => item.containsCoffee === parsedContainsCoffee
    )
  }

  if (isHotChocolate) {
    const parsedIsHotChocolate: boolean = isHotChocolate === "true"
    filteredData = filteredData.filter(
      (item) => item.isHotChocolate === parsedIsHotChocolate
    )
  }

  if (filteredData.length === 0) {
    return res.status(404).json({
      message: "No chocolate milk found matching the provided criteria.",
    })
  }

  res.json(filteredData)
}

export const getChocolateMilkById = (
  req: Request<{ id: string }>,
  res: Response<ChocolateMilk | { message: string }>
) => {
  const { id } = req.params
  const parsedId = Number(id)
  const foundChocolateMilk = chocolateMilkList.find(
    (item) => item.id === parsedId
  )

  if (!foundChocolateMilk) {
    return res.status(404).json({ message: "Chocolate milk ID not found." })
  }

  res.json(foundChocolateMilk)
}
