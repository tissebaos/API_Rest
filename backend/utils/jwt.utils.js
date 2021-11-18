var jwt = require('jsonwebtoken');

const JWT_TOKEN_SECRET = 'n8V7ODddesfoy6OJzZRnM1j6MtGNJHzK';

module.exports = {
    generateTokenForUser: (userData) => {
        return jwt.sign({
                userId: userData.id,
                isAdmin: userData.isAdmin
            },
            JWT_TOKEN_SECRET, {
                expiresIn: '1h'
            })
    }
}