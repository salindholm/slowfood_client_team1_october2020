import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [
  
  { key: 3, text: "View All", value: "all" },
  { key: 1, text: "Meat", value: "meat" },
  { key: 2, text: "Veggie", value: "veggie" },
  { key: 3, text: "Glutenfree", value: "glutenfree" },
];

const DisplayCategoriesList = (props) => {
  return (
    <Menu compact>
      <Dropdown
        onChange={props.onChangeHandler}
        id="options"
        text="Select a category"
        data-cy="dropdown"
        options={options}
        simple
        item
      />
    </Menu>
  );
};

export default DisplayCategoriesList;
