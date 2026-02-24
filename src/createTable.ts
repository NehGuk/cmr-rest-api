import Database from "better-sqlite3"
import path from "node:path"

export function createTable() {
  const db = new Database(path.join("cmr-database.db"))

  db.exec(`
    CREATE TABLE IF NOT EXISTS cmr (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      country_of_origin TEXT NOT NULL,
      rating INTEGER NOT NULL CHECK(rating >= 0 AND rating <= 5),
      contains_coffee INTEGER NOT NULL DEFAULT 0,
      is_hot_chocolate INTEGER NOT NULL DEFAULT 0,
      image TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `)

  db.close()
}

createTable()
