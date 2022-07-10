import Button from 'components/Button/Button';
import css from './MovieGalleryItem.module.css';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieGalleryItem = ({
  image,
  id,
  title,
  watched,
  overview,
  handleWatched,
  handleModal,
}) => {
  return (
    <li className={css['gallery-item']}>
      <img src={IMG_PATH + image} alt={title} />
      <p>{title}</p>
      <p onClick={() => handleWatched(id)}>Watched: {'' + watched}</p>
      <Button caption="show info" handleClick={() => handleModal(overview)} />
    </li>
  );
};

export default MovieGalleryItem;
