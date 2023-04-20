module.exports = {
  secretOrKey: process.env.SECRET_OR_KEY,
  mongoURI: process.env.MONGO_URI,
  isProduction: process.env.NODE_ENV === "production",
  OPENAI_API_KEY_1: process.env.OPENAI_API_KEY_1,
  OPENAI_API_KEY_2: process.env.OPENAI_API_KEY_2
};
