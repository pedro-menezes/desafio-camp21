const { StatusCodes } = require("http-status-codes");
const { genresService } = require("../services");

module.exports = {
  create: async (req, res) =>{
    try {
      const { name } = req.body;
      const response = await genresService.create({ name });
      
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
