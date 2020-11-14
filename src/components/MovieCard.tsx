import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import Movie from '../model/movie';
import '../styles/MovieCard.scss';

type MovieCardProps = {
  movie: Movie;
  deleteMovie: () => void;
  increaseLike: () => void;
  decreaseLike: () => void;
  increaseDislike: () => void;
  decreaseDislike: () => void;
};

type MovieCardState = {
  isLiked: boolean;
  isDisliked: boolean;
};

export default class MovieCard extends React.Component<
  MovieCardProps,
  MovieCardState
> {
  constructor(props: MovieCardProps) {
    super(props);
    this.state = {
      isLiked: false,
      isDisliked: false,
    };
  }

  toggleLike() {
    if (this.state.isLiked) {
      this.props.decreaseLike();
    } else {
      this.props.increaseLike();
    }

    if (this.state.isDisliked) {
      this.props.decreaseDislike();
    }

    this.setState((oldState: MovieCardState) => ({
      isLiked: !oldState.isLiked,
      isDisliked: false,
    }));
  }

  toggleDislike() {
    if (this.state.isDisliked) {
      this.props.decreaseDislike();
    } else {
      this.props.increaseDislike();
    }

    if (this.state.isLiked) {
      this.props.decreaseLike();
    }

    this.setState((oldState: MovieCardState) => ({
      isLiked: false,
      isDisliked: !oldState.isDisliked,
    }));
  }

  render() {
    return (
      <Card className="MovieCard">
        <Card.Body>
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Subtitle>{this.props.movie.category}</Card.Subtitle>
        </Card.Body>
        <Card.Body className="MovieCard__ButtonGroup">
          <div className="MovieCard__Button__Container">
            <ThumbUp
              color={this.state.isLiked ? 'primary' : 'action'}
              className="MovieCard__Button"
              onClick={() => this.toggleLike()}
            />
            {this.props.movie.likes}
          </div>
          <div className="MovieCard__Button__Container">
            <ThumbDown
              color={this.state.isDisliked ? 'error' : 'action'}
              className="MovieCard__Button"
              onClick={() => this.toggleDislike()}
            />
            {this.props.movie.dislikes}
          </div>
          <Button
            className="MovieCard__Button--Delete"
            variant="danger"
            onClick={() => this.props.deleteMovie()}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
