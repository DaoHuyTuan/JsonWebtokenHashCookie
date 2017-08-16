const queryDB = require('./db');
class User {
    constructor(email ,password){
        this.email    = email;
        this.password = password;
    }
    // static getAllStudent(cb){
    //     const sql = 'SELECT * FROM "Student"';
    //     queryDB(sql,[],(err,data) => {
    //         if(err) return cb(err);
    //         cb(null,data.rows)
    //     })
    //     // queryDB('SELECT * FROM "Student"', [], (err, result) => {
    //     //     if (err) return cb(err);
    //     //     cb(null, result.rows);
    //     // });
    //     .then(result => console.log(result.rows));   
    // }
    static getAllProduct(cb) {
        queryDB('SELECT * FROM "Student"')
        .then(result => console.log(result.rows))
        .catch(err => console.log(err));
            
    }
    static getStudentById(id){
        const sql = 'SELECT * FROM "Student" WHERE id = $1';
        queryDB(sql,[id])
        .then(result => console.log(result.rows))
        .catch(err => console.log(err.toString()));    
    }
    static insertStudent(email,password){
        const insertSQL = `INSERT INTO "Student" (email, password) VALUES ($1,$2)`;
        queryDB(insertSQL,[email,password]) 
            .then(result => console.log("insert thành công"))
            .catch(err => console.log(err.toString()));
        
    }
    
    static updateStudent(id,email,password){
        const updateSQL = 'UPDATE "Student" SET  email=$2, password = $3 WHERE id =$1';
        queryDB(updateSQL,[id,email,password])
        .then(result => console.log("update thành công"))
        .catch(err => console.log(err.toString()));
    }
    
    static deleteStudent(id){
        const deleteSQL = 'DELETE FROM "Student" WHERE id = $1';
        queryDB(deleteSQL,[id])
        .then(result => console.log("delete thành công"))
        .catch(err => console.log(err.toString()));
    }
}

//User.deleteStudent(3);
//User.insertStudent('invoker@gmail.com','invoker');
// User.getAllStudent((err,data) => {
//     if (err) return cb(err);
//     cb(null, console.log(result.rows));
// })
module.exports = User;

