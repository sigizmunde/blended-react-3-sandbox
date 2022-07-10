import React from 'react';
import { fetchMovies } from 'services/movie-api';
import movieMapper from 'utils/mapper';
import Button from './Button/Button';
import MovieGallery from './MovieGallery/MovieGallery';

export class App extends React.Component {
  state = {
    items: [],
    page: 1,
    isLoading: false,
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

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.length === 0 && (
          <Button caption="Load movies" handleClick={() => this.getMovies(1)} />
        )}
        {items.length > 0 && (
          <>
            <MovieGallery movieList={items} />
            <Button caption="Load more" handleClick={this.handleLoadMore} />
          </>
        )}
      </div>
    );
  }
}
