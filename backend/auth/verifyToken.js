import jwt from "jsonwebtoken";


function verifyToken(req, res, next) {
    const token = req.header("Authorization");
    console.log(token)
    if (!token) {
        res.status(403).json({message: "Unauthorized"})  
    } else {
        jwt.verify(token, "SecretKey", (err, decoded) => {
            if (err) res.status(401).json({message: "your token is Invalid"});
            else {
                req.userId = decoded.in;
                next();
            }
        });
    }
};

export default verifyToken