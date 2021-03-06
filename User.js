const queryDB = require('./db');
const {hash,compare} = require('bcrypt');
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
        queryDB('SELECT * FROM "Student"', [], (err, result) => {
            if (err) return cb(err);
            cb(null, result.rows);
        });
    }
    static getStudentById(id){
        const sql = 'SELECT * FROM "Student" WHERE id = $1';
        queryDB(sql,[id])
        .then(result => console.log(result.rows))
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

    async signUp(){
        const insertSQL = `INSERT INTO "Student" (email, password) VALUES ($1,$2)`;
        const hashpassword = await hash(this.password,8);
        return await queryDB(insertSQL,[this.email,hashpassword]);     
    }
    async signIn(){
        const sql = 'SELECT * FROM "Student" WHERE email = $1';
        const result = await queryDB(sql,[this.email]);       
        if(!result.rows[0]) throw new Error("email ko ton tai");//throw new Error("email ko tồn tại");
        const hashpassword = result.rows[0].password; 
        const isValid = await compare(this.password,hashpassword);
        if(!isValid) throw new Error("sai mat khau");
        return true;
    }
}

//User.deleteStudent(3);
//User.insertStudent('invoker@gmail.com','invoker');
// User.getAllStudent((err,data) => {
//     if (err) return cb(err);
//     cb(null, console.log(result.rows));
// })
module.exports = User;

