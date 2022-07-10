import css from './MovieGalleryItem.module.css';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieGalleryItem = ({ image, id, title, watched }) => {
  return (
    <li className={css['gallery-item']}>
      <img src={IMG_PATH + image} alt={title} />
      <p>{title}</p>
      <p>Watched: {'' + watched}</p>
    </li>
  );
};

export default MovieGalleryItem;
