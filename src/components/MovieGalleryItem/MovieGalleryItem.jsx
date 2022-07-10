const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieGalleryItem = ({ image, id, title, watched }) => {
  return (
    <li>
      <img src={IMG_PATH + image} alt={title} />
      <p>{title}</p>
      <p>Watched: {'' + watched}</p>
    </li>
  );
};

export default MovieGalleryItem;
