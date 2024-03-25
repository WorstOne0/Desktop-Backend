// Models
import User from "../models/index.js";

export default {
  getAll: async (req, res, next) => {
    try {
      const users = await User.find({}, { password: 0 });

      res.json({ status: 200, payload: users, msg: "" });
    } catch (error) {
      console.log("Controller User :: getAll", error);
      return res.json({ status: 500, error, msg: "Unexpected Error" });
    }
  },
  //
  getById: async (req, res, next) => {
    try {
      const { _id } = req.params;

      const user = await User.findById(_id).lean();

      res.json({ status: 200, payload: user, msg: "" });
    } catch (error) {
      console.log("Controller User :: getById", error);
      return res.json({ status: 500, error, msg: "Unexpected Error" });
    }
  },
  //
  create: async (req, res, next) => {
    try {
      const user = req.body;

      const userExists = await User.findOne({ email: user.email });
      if (userExists) {
        return res.json({ status: 409, error: "Duplicated", msg: "Email já existe" });
      }

      const created = await User.create(req.body);

      res.json({ status: 200, payload: created, msg: "Usúario criado com sucesso" });
    } catch (error) {
      console.log("Controller User :: create", error);
      return res.json({ status: 500, error, msg: "Unexpected Error" });
    }
  },
  //
  update: async (req, res, next) => {
    try {
      const updated = await User.findOneAndUpdate({ _id: req.body._id }, req.body);

      res.json({ status: 200, payload: updated, msg: "Usúario atualizado com sucesso" });
    } catch (error) {
      console.log("Controller User :: update", error);
      return res.json({ status: 500, error, msg: "Unexpected Error" });
    }
  },
  //
  delete: async (req, res, next) => {
    try {
      const deleted = await User.findOneAndUpdate({ _id: req.body._id }, req.body);

      res.json({ status: 200, payload: deleted, msg: "Usúario deletado com sucesso" });
    } catch (error) {
      console.log("Controller User :: delete", error);
      return res.json({ status: 500, error, msg: "Unexpected Error" });
    }
  },
};
