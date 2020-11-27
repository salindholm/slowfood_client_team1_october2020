import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import axios from 'axios'

const options = [
	{ key: 1, text: "Meat", value: "meat" },
	{ key: 2, text: "Veggie", value: "veggie" },
	{ key: 3, text: "Glutenfree", value: "glutenfree" },
];

class DisplayCategoriesList extends Component {
	state = {
		options: [],
	};

	onChangeHandler = async (event) => {
    let selectedCategory = event.target.textContent.toLowerCase()
    let response = await axios.get(
      `/categories/${selectedCategory}`, 
    ) 
  };

	render() {
		return (
			<Menu compact>
				<Dropdown
					onChange={this.onChangeHandler}
					id="options"
					text="Select a category"
					data-cy="dropdown"
					options={options}
					simple
					item
				/>
			</Menu>
		);
	}
}

export default DisplayCategoriesList;
