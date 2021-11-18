const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_TOKEN_SECRET = 'n8V7ODddesfoy6OJzZRnM1j6MtGNJHzK';

module.exports = (req, res, next) => {
    //La variable token reçois le bearer et token
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, JWT_TOKEN_SECRET);

    //Je change en userId mais pas sur, peut etre userId
    const userId = decodedToken.userId;
    req.params.userId = userId;

    next();
    try {} catch {
        // si jamais il y a un problème innatendu, la requête ne peut pas se faire
        res.status(401).json({ error: new Error("Requête invalid") });
    }
};