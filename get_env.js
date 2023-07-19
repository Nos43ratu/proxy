require("dotenv").config();

module.exports = {
  get_env(key) {
    const value = process.env[key];

    if (!value) {
      throw new Error(`Environment variable a ${key} not found`);
    }

    return value;
  },
};
