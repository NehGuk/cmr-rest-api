import Database from "better-sqlite3"
import path from "path"

export async function createTable() {
  const db = new Database(path.join("cmr-database.db"))

  await db.exec(`
    CREATE TABLE IF NOT EXISTS cmr (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      country_of_origin TEXT NOT NULL,
      rating INTEGER NOT NULL CHECK(rating >=0 AND rating <=5),
      contains_coffee BOOLEAN NOT NULL DEFAULT FALSE,
      is_hot-chocolate BOOLEAN NOT NULL DEFAULT FALSE,
      image TEXT NOT NULL,
      created_at? TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
  `)

  await db.close()
  console.log("Yayyy! Table created successfully.")
}
