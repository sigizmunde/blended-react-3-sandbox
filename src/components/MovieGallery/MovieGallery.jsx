const {
  default: MovieGalleryItem,
} = require('components/MovieGalleryItem/MovieGalleryItem');

const MovieGallery = ({ movieList }) => {
  return (
    <ul>
      {movieList.map(({ image, id, title, watched }) => {
        return (
          <MovieGalleryItem
            key={id}
            id={id}
            image={image}
            title={title}
            watched={watched}
          />
        );
      })}
    </ul>
  );
};

export default MovieGallery;
