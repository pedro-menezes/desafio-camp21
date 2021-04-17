const { StatusCodes } = require("http-status-codes");
const { actorsService } = require("../services");

module.exports = {
  create: async (req, res) =>{
    try {
      const { name, birthDate } = req.body;
      const response = await actorsService.create({ name, birthDate });
      
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
