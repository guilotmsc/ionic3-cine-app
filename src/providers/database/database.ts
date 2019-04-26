import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

	public getDB() {
    return this.sqlite.create({
      name: 'cine.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {

        // Criando as tabelas
        this.createTables(db);

      })
      .catch(e => alert(e));
  }

  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS order (id integer primary key AUTOINCREMENT NOT NULL, transaction_id TEXT, user_id INTEGER)'],
      ['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, product_id INTEGER, amount INTEGER, order_id integer, FOREIGN KEY(order_id) REFERENCES orders(id))']
    ])
    .then(() => alert('Tabelas criadas'))
    .catch(e => alert('Erro ao criar as tabelas'));
  }

}
