import React from 'react';
import { fetchMovies } from 'services/movie-api';
import movieMapper from 'utils/mapper';
import Button from './Button/Button';
import MovieGallery from './MovieGallery/MovieGallery';
import Modal from './Modal/Modal';

export class App extends React.Component {
  state = {
    items: [],
    page: 1,
    isLoading: false,
    overview: '',
    // mustShow: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.getMovies(this.state.page);
    }
  }

  getMovies = page => {
    this.setState({ isLoading: true });
    fetchMovies(page)
      .then(data => {
        this.setState({ items: [...this.state.items, ...movieMapper(data)] });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleWatched = id => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === id) {
        item.watched = !item.watched;
      }
      return item;
    });
    this.setState({ items: updatedItems });
  };

  handleModal = overview => {
    this.setState({ overview });
  };

  closeModal = () => {
    this.setState({ overview: '' });
  };

  render() {
    const { items, overview } = this.state;
    return (
      <div>
        {items.length === 0 && (
          <Button caption="Load movies" handleClick={() => this.getMovies(1)} />
        )}
        {items.length > 0 && (
          <>
            <MovieGallery
              movieList={items}
              handleWatched={this.toggleWatched}
              handleModal={this.handleModal}
            />
            <Button caption="Load more" handleClick={this.handleLoadMore} />
          </>
        )}
        {overview !== '' && (
          <Modal overview={overview} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}
