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
  res: Response<ChocolateMilk[]>
): void => {
  const { name, countryOfOrigin, rating } = req.query

  if (name) {
    const filteredData = chocolateMilkList.filter(
      (item) => item.name.toLowerCase() === name.toString().toLowerCase()
    )
    res.json(filteredData)
  }

  if (rating) {
    const filteredData = chocolateMilkList.filter(
      (item) => item.rating === Number(rating)
    )
    res.json(filteredData)
  }

  if (countryOfOrigin) {
    const filteredData = chocolateMilkList.filter(
      (item) =>
        item.countryOfOrigin.toLowerCase() ===
        countryOfOrigin.toString().toLowerCase()
    )
    res.json(filteredData)
  }

  res.json(chocolateMilkList)
}

export const getChocolateMilkById = (
  req: Request<{ id: string }>,
  res: Response
): void => {
  const { id } = req.params
  if (id) {
    const filteredData = chocolateMilkList.find(
      (item) => item.id === Number(id)
    )
    res.json(filteredData)
  }
}
