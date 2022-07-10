const movieMapper = movieList => {
  return movieList.map(({ backdrop_path, title, overview, id }) => {
    return { id, title, image: backdrop_path, overview, watched: false };
  });
};

export default movieMapper;
