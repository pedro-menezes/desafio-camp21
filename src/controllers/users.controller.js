const { StatusCodes } = require("http-status-codes");
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
  }
};
