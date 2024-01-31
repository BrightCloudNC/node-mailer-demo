import joi from "joi";

export const emailValidateSchema = (emailObject) => {
  const Schema = joi.object({
    email: joi
      .array()
      .items(
        joi
          .string()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          })
          .required()
          .messages({
            "string.base": `email should be a type of 'text'`,
            "string.empty": "email cannot be an empty field",
            "any.required": "email is a required field",
            "string.email": "invalid email",
          })
      )
      .required()
      .messages({
        "*": "email is a required field",
      }),
  });

  return Schema.validateAsync(emailObject);
};
