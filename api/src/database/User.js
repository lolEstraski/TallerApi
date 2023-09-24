const mysql2     = require('mysql2/promise')
const jwtManager = require('../security/jwtManager')

const host       = process.env.HOST        || '172.17.0.2'
const db         = process.env.DB_NAME     || 'users'
const dbUser     = process.env.DB_USER     || 'root'
const dbPassword = process.env.DB_PASSWORD || '3106316813'
const dbPort     = process.env.DB_PORT     || '3306'

const pool = mysql2.createPool({
    host: host, 
    port: dbPort,
    database: db,
    user: dbUser,
    password: dbPassword
})


const getAllUsers = async (limit, offset) => {
    const query = `SELECT id,name,dni,email FROM users LIMIT ${limit} OFFSET ${offset}`
    const result = await pool.query(query)
    return result[0]
}


const getTotalUsers = async () => {
    const query = `SELECT COUNT(id) as total FROM users`
    const result = await pool.query(query)

    return parseInt(result[0][0].total)
}


const getUser = async (idUser) => {
    const query = `SELECT name,dni,email FROM users WHERE id=${idUser}`
    const result = await pool.query(query)

    return result[0].length > 0 ? result[0] : null
}


const getResetPasswordToken = async (email) => {
    if( !(await emailExists(email)) ) {
        return null
    }

    let loggedUser = await findUserByEmail(email)
    loggedUser = loggedUser[0]
    
    const token = jwtManager.generateAccessToken(loggedUser.id, loggedUser.name, loggedUser.dni)

    return token
}


const registerUser = async (newUser) => {
    if( await emailExists(newUser.email) || await dniExists(newUser.dni) ) {
        return null
    }

    const query = `INSERT INTO users (name, dni, email, password) 
    VALUES ('${newUser.name}', '${newUser.dni}', '${newUser.email}', '${newUser.password}');`

    try {
        const result = await pool.query(query)
        return result[0]
    } catch (error) {
        console.error('Error inserting user in database: ', error)
        throw error
    }
}


const login = async (loginData) => {
    if( !(await emailExists(loginData.email)) ) {
        return null
    }

    if( await wrongPassword(loginData.password) ){
        return null
    }

    let loggedUser = await findUserByEmail(loginData.email)
    loggedUser = loggedUser[0]
    
    const token = jwtManager.generateAccessToken(loggedUser.id, loggedUser.name, loggedUser.dni)

    return token
}


async function emailExists(email) {
    const query = `SELECT id,name FROM users WHERE email='${email}'`
    const result = await pool.query(query)

    return result[0].length > 0
}

async function wrongPassword(password) {
    const query = `SELECT id,name FROM users WHERE password='${password}'`
    const result = await pool.query(query)

    return result[0].length == 0
}

async function dniExists(dni) {
    const query = `SELECT id,name FROM users WHERE dni='${dni}'`
    const result = await pool.query(query)

    return result[0].length > 0
}

async function findUserByEmail(email) {
    const query = `SELECT id,name,dni FROM users WHERE email='${email}'`
    const result = await pool.query(query)

    return result[0]
}


const updateUser = async (idUser, newUser) => {
    if( getUser(idUser) == null ) {
        console.log('Error: User not found')
        return null
    }

    const query = `UPDATE users
    SET name = '${newUser.name}', 
    dni = '${newUser.dni}',  
    email = '${newUser.email}', 
    password = '${newUser.password}'
    WHERE id=${idUser};`

    try {
        const result = await pool.query(query)
        return result[0]
    } catch (error) {
        console.error('Error updating user in database: ', error)
        throw error
    }
}


const updatePassword = async (email, newPassword) => {
    if( !(await emailExists(email)) ) {
        console.log(`Error: User with email ${email} not found`)
        return null
    }
    
    const query = `UPDATE users
    SET password = '${newPassword}' WHERE email='${email}';`

    try {
        const result = await pool.query(query)
        return result[0]
    } catch (error) {
        console.error('Error updating password in database: ', error)
        throw error
    }
} 


const deleteUser = async (idUser) => {
    if( getUser(idUser) == null ) {
        console.log('Error: User not found')
        return false
    }

    try {
        const query = `DELETE FROM users WHERE id=${idUser}`
        const result = await pool.query(query)
        return true
    } catch (error) {
        console.error('Error deleting user in database: ', error)
        throw error
    }
}


module.exports = {
    getAllUsers,
    getTotalUsers,
    getUser,
    getResetPasswordToken,
    registerUser,
    login,
    updateUser,
    updatePassword,
    deleteUser
}



