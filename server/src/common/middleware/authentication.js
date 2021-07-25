import jwt from 'jsonwebtoken';
//Bắt token
const authMiddleware = (req, res, next) => {
  const token = req.header('bearer');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied.' });
  } else {
    try {
      const id = jwt.verify(token, process.env.JWT_TOKEN_SECRET || '123');

      if (!req.user) req.user = { id: '' };
      console.log(id);
      req.user.id = id;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token is not valid' });
    }
  }
};

export default authMiddleware;
