import React from 'react';
import {Dropdown} from 'react-bootstrap';

type NumberMoviesDropdownProps = {
  listNumberMoviesPerPage: number[];
  numberMoviesSelected: number;
  selectNumberMovies: (numberMovies: number) => void;
};

export default class NumberMoviesDropdown extends React.Component<
  NumberMoviesDropdownProps
> {
  constructor(props: NumberMoviesDropdownProps) {
    super(props);
  }

  renderDropdownItem(item: number, index: number) {
    return (
      <Dropdown.Item
        key={index}
        onClick={() => this.props.selectNumberMovies(item)}>
        {item}
      </Dropdown.Item>
    );
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle id="number-movie-dropdown">
          {this.props.numberMoviesSelected}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {this.props.listNumberMoviesPerPage.map((item, idx) =>
            this.renderDropdownItem(item, idx),
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
