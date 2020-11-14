import React from 'react';
import {Pagination} from 'react-bootstrap';

type MoviePaginationProps = {
  pagesCount: number;
  offsetPage: number;
  goToPage: (pageNumber: number) => void;
};

export default class MoviePagination extends React.Component<
  MoviePaginationProps
> {
  constructor(props: MoviePaginationProps) {
    super(props);
  }

  goToPage(pageNumber: number) {
    if (pageNumber !== this.props.offsetPage) {
      this.props.goToPage(pageNumber);
    }
  }

  renderPaginationItem() {
    return Array(this.props.pagesCount)
      .fill(0)
      .map((_item, index) => (
        <Pagination.Item
          key={index + 1}
          active={index === this.props.offsetPage}
          onClick={() => this.goToPage(index)}>
          {index + 1}
        </Pagination.Item>
      ));
  }

  render() {
    return (
      <Pagination>
        {this.props.offsetPage !== 0 && (
          <>
            <Pagination.First onClick={() => this.goToPage(0)} />
            <Pagination.Prev
              onClick={() => this.goToPage(this.props.offsetPage - 1)}
            />
          </>
        )}
        {this.renderPaginationItem()}
        {this.props.offsetPage + 1 < this.props.pagesCount && (
          <>
            <Pagination.Next
              onClick={() => this.goToPage(this.props.offsetPage + 1)}
            />
            <Pagination.Last
              onClick={() => this.goToPage(this.props.pagesCount - 1)}
            />
          </>
        )}
      </Pagination>
    );
  }
}
