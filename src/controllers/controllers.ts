import { chocolateMilkList } from "../data/data"
import type { ChocolateMilk } from "../data/data"
import type { Request, Response } from "express"

type ChocolateMilkQueryParams = {
  name?: string
  country_of_origin?: string
  description?: string
  rating?: string
  contains_coffee?: "true" | "false"
  is_hot_chocolate?: "true" | "false"
}

export const getChocolateMilks = (
  req: Request<{}, unknown, {}, ChocolateMilkQueryParams>,
  res: Response<ChocolateMilk[] | { message: string }>
) => {
  const { name, country_of_origin, rating, contains_coffee, is_hot_chocolate } =
    req.query
  let filteredData: ChocolateMilk[] = [...chocolateMilkList]

  if (name) {
    const parsedName: string = name.toLowerCase()
    filteredData = filteredData.filter(
      (item) => item.name.toLowerCase() === parsedName
    )
  }

  if (country_of_origin) {
    const parsedcountry_of_origin: string = country_of_origin.toLowerCase()
    filteredData = filteredData.filter(
      (item) => item.country_of_origin.toLowerCase() === parsedcountry_of_origin
    )
  }

  if (rating) {
    const parsedRating: number = Number(rating)
    filteredData = filteredData.filter((item) => item.rating === parsedRating)
  }

  if (contains_coffee) {
    const parsedcontains_coffee: boolean = contains_coffee === "true"
    filteredData = filteredData.filter(
      (item) => item.contains_coffee === parsedcontains_coffee
    )
  }

  if (is_hot_chocolate) {
    const parsedis_hot_chocolate: boolean = is_hot_chocolate === "true"
    filteredData = filteredData.filter(
      (item) => item.is_hot_chocolate === parsedis_hot_chocolate
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
