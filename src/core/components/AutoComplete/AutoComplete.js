import React from 'react';
import {Component} from 'react';
import MuiDownshift from 'mui-downshift';

class AutoComplete extends Component {
	static defaultProps = {
		items: [],
	};

	constructor(props) {
		super(props);
		const {defaultSelectedItem} = props;
		this.state = {
			filteredItems: defaultSelectedItem
				? this.filterItems(defaultSelectedItem.label)
				: this.props.items,
		};
	}

	filterItems = filter =>
		this.props.items.filter(item => item.label.toLowerCase().includes(filter.toLowerCase()));

	handleStateChange = changes => {
		if (typeof changes.inputValue === 'string') {
			this.setState({filteredItems: this.filterItems(changes.inputValue)});
		}
		if (this.input && this.props.blurOnSelect) {
			this.input.blur();
		}
	};

	render() {
		const {items, ...props} = this.props;
		const {filteredItems} = this.state;
		return (
			<MuiDownshift
				scrollIntoView={() => {}} // workaround for bug causing entire page to scroll
				items={filteredItems}
				onStateChange={this.handleStateChange}
				getListItemKey={index => filteredItems[index].value}
				{...props}
				inputRef={node => {
					this.input = node;
				}}
			/>
		);
	}
}

export default AutoComplete;
