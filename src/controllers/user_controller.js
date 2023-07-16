// User Controller

export default {
  // ** CRUD Operations **

  getAll: (req, res, next) => {
    // Logged
    if (!req.userEmail) {
      return res.status(401).send("Unauthorized");
    }

    res.status(200).send("Buscar todos os usuarios");
  },
  //
  getUser: (req, res, next) => {
    let id = req.params.id;

    res.status(200).send(`Buscar o usuario de id ${id}`);
  },
  //
  addUser: (req, res, next) => {
    let userJson = req.body;

    res.status(200).send("Usuario adicionado");
  },
  //
  updateUser: (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Atualizar usuario ${id}`);
  },
  //
  deleteUser: (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Deletar usuario ${id}`);
  },
};
