import bcrypt from "bcrypt";

const encryptPassword = async (password) => {
  try {
    return await bcrypt.hashSync(password, 10);
  } catch (error) {
    console.log("Error from encrypt", JSON.stringify(error));
  }
};

const decryptPassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.log("Error from decrypt", JSON.stringify(error));
  }
};

export { encryptPassword, decryptPassword };
