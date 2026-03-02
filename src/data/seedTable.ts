import Database from "better-sqlite3"
import path from "node:path"
import { chocolateMilkList } from "./data"

export function seedTable() {
  const db = new Database(path.join("cmr.db"))
  console.log("Seeding database...")

  try {
    db.exec("BEGIN TRANSACTION")

    const insert = db.prepare(`
      INSERT INTO cmr (name, country_of_origin, rating, description, contains_coffee, is_hot_chocolate, image)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `)

    for (const {
      name,
      country_of_origin,
      rating,
      description,
      contains_coffee,
      is_hot_chocolate,
      image,
    } of chocolateMilkList) {
      insert.run(
        name,
        country_of_origin,
        rating,
        description || null,
        contains_coffee ? 1 : 0,
        is_hot_chocolate ? 1 : 0,
        image
      )
    }

    db.exec("COMMIT")
    console.log("All records inserted successfully!")
  } catch (error) {
    db.exec("ROLLBACK")
    console.error("Error:", error)
  } finally {
    db.close()
    console.log("Database connection closed.")
  }
}

seedTable()
