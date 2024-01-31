import { emailValidateSchema } from "../utils/validateSchema.js";

export const emailValidatorMiddleware = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      return res.status(400).json({ message: "missing request body !" });
    }
    await emailValidateSchema(req.body);
    next();
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};
