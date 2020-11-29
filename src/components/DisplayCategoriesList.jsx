import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [
  // added a "View all", that's why i added the if / else in the onchangehandler
  { key: 4, text: "View All", value: "all" },
  { key: 1, text: "Meat", value: "meat" },
  { key: 2, text: "Veggie", value: "veggie" },
  { key: 3, text: "Glutenfree", value: "glutenfree" },
];
// refactored this into a functional component
const DisplayCategoriesList = (props) => {
  return (
    <Menu compact>
      <Dropdown
        // here we are using the function that we got from the props
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
