import jwt from 'jsonwebtoken';

// middleware is used to verify a user and check to see if they are
// authorized to complete an action
// click like button => auth middleware (next) => like controller...

const auth = async (req, res, next) => {
  try {
    const token = req.headers.Authorization.split(' ')[1];
    const isCustomAuth = token.length < 500; //our own

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test');

      req.userId = decodedData?.id;
    } else {
      // google's auth
      decodedData = jwt.decode(token);

      // sub let's google differentiate each user / token
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
