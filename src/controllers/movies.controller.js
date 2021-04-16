const { StatusCodes } = require("http-status-codes");
const { moviesService } = require("../services");

module.exports = {
  list: async (req, res) => {
    try {
      const { title } = req.query;
      const response = await moviesService.list({ title });

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
      const { title, duration, director_name, genre } = req.body;
      console.log({ title, duration, director_name });
      const movie = await moviesService.create({ title, duration, director_name });
      
      const response = await moviesService.addGenre({ genre, movie });
      
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
};
