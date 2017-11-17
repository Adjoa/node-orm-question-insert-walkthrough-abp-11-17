const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })
    })
  }

  insert(){
    const self = this
    return new Promise(function(resolve){
      const sql = `INSERT INTO questions (content) VALUES (?)`
      
      db.run(sql, self.content, function(){
        console.log(`...question ${this.lastID} inserted into database`)
        self.id = this.lastID
        resolve(self)
      })
    })
  }

  constructor(content){
    this.content = content
  }

}

module.exports = Question;
