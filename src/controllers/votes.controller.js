const { StatusCodes } = require("http-status-codes");
const { messages } = require("../helpers");
const { usersService, moviesService, votesService } = require("../services");

module.exports = {
  create: async (req, res) =>{
    try {
      const { userId, movieId, note  } = req.body;
      const user = await usersService.getById(userId);
      const movie = await moviesService.getById(movieId);
      
      if (!user || !movie){
        throw {
          status: StatusCodes.BAD_REQUEST,
        }
      }

      const response = await votesService.create({ userId, movieId, note });
      
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
