"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = createTable;
var better_sqlite3_1 = require("better-sqlite3");
var node_path_1 = require("node:path");
function createTable() {
    var db = new better_sqlite3_1.default(node_path_1.default.join("cmr-database.db"));
    db.exec("\n    CREATE TABLE IF NOT EXISTS cmr (\n      id INTEGER PRIMARY KEY AUTOINCREMENT,\n      name TEXT NOT NULL,\n      description TEXT NOT NULL,\n      country_of_origin TEXT NOT NULL,\n      rating INTEGER NOT NULL CHECK(rating >= 0 AND rating <= 5),\n      contains_coffee INTEGER NOT NULL DEFAULT 0,\n      is_hot_chocolate INTEGER NOT NULL DEFAULT 0,\n      image TEXT NOT NULL,\n      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n    );\n  ");
    db.close();
}
createTable();
