import JWT from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = await req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT, (err, decode) => {
      if (err) {
        console.log("error".bgBlue, err.message);
        return res.status(200).send({
          message: "Auth Failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(`${error}`.bgYellow);
    res.status(200).send({
      message: "Auth Failed",
      success: false,
    });
  }
};
