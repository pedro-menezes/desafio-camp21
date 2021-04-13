const { StatusCodes } = require("http-status-codes");
const { messages } = require("../helpers");
const { usersService } = require("../services");

module.exports = {
  list: async (req, res) => {
    try {
      const { name } = req.query;
      const response = await usersService.list({ name });

      if (!response || response.data.length === 0) {
        return res.status(StatusCodes.NO_CONTENT).end();
      }

      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },

  create: async (req, res) =>{
    try {
      const { name, email, password, isAdmin } = req.body;
      console.log({ name, email, password, isAdmin });
      const response = await usersService.create({ name, email, password, isAdmin });
      
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },

  destroy: async (req, res) =>{
    try {
      const { id } = req.body;
      const response = await usersService.destroy(id);

      if (!response) {
        throw{
          status: StatusCodes.NO_CONTENT,
          messages: messages.userNotExist,
        }
      }

      return res.status(StatusCodes.OK).json(messages.deleted(id));
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },

  update: async (req, res) =>{
    try {
      const { id, name, email, password, isAdmin} = req.body;
      const user = await usersService.getById(id);

      user.name = name;
      user.email = email;
      user.password = password;
      user.isAdmin = isAdmin;

      const response = await usersService.update(user);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
