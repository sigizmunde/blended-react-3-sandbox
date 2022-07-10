import css from './MovieGallery.module.css';

const {
  default: MovieGalleryItem,
} = require('components/MovieGalleryItem/MovieGalleryItem');

const MovieGallery = ({ movieList, handleWatched, handleModal }) => {
  return (
    <ul className={css.gallery}>
      {movieList.map(({ image, id, title, watched, overview }) => {
        return (
          <MovieGalleryItem
            key={id}
            id={id}
            image={image}
            title={title}
            watched={watched}
            overview={overview}
            handleWatched={handleWatched}
            handleModal={handleModal}
          />
        );
      })}
    </ul>
  );
};

export default MovieGallery;
