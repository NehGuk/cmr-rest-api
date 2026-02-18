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
): void => {
  const { name, countryOfOrigin, rating } = req.query
  let filteredData: ChocolateMilk[] = chocolateMilkList

  if (name) {
    filteredData = filteredData.filter(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    )
  }

  if (rating) {
    filteredData = filteredData.filter((item) => item.rating === Number(rating))
  }

  if (countryOfOrigin) {
    filteredData = filteredData.filter(
      (item) =>
        item.countryOfOrigin.toLowerCase() ===
        countryOfOrigin.toString().toLowerCase()
    )
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
