import React from 'react';
import {Dropdown} from 'react-bootstrap';

type CategoryDropdownProps = {
  categories: string[];
  categorySelected: string;
  selectCategory: (category: string) => void;
};

export default class CategoryDropdown extends React.Component<
  CategoryDropdownProps
> {
  constructor(props: CategoryDropdownProps) {
    super(props);
  }

  renderDropdownItem(category: string, index: number) {
    return (
      <Dropdown.Item
        key={index}
        onClick={() => this.props.selectCategory(category)}>
        {category}
      </Dropdown.Item>
    );
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle id="category-dropdown">
          {this.props.categorySelected}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => this.props.selectCategory('All')}>
            All
          </Dropdown.Item>
          {this.props.categories.map((category, idx) =>
            this.renderDropdownItem(category, idx),
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
