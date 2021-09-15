import React from 'react';
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native';

const WheelPickerNativeInterface = {
	name: 'WheelPicker',
	propTypes: {
		data:PropTypes.array,
		onValueChange: PropTypes.func,
		selectedIndex: PropTypes.number,
		itemTextColor: PropTypes.string,
		itemTextSize: PropTypes.number,
		selectedItemTextColor: PropTypes.string,
		itemSpace: PropTypes.number,
		isCurved: PropTypes.bool,
		hasIndicator: PropTypes.bool,
		indicatorColor: PropTypes.string,
		hasCurtain: PropTypes.bool,
		curtainColor: PropTypes.string,
		curtainCornerRadius: PropTypes.number
	}
}

const WheelPickerNative = requireNativeComponent('WheelPicker', WheelPickerNativeInterface);

class WheelPicker extends React.Component {

	constructor(props){
		super(props)
		this.state = this._stateFromProps(props)
	}

	UNSAFE_componentWillReceiveProps (props) {
		this.setState(this._stateFromProps(props));
	}

	_stateFromProps (props) {
		var selectedIndex = 0;
		var items = [];
		React.Children.forEach(props.children, function (child, index) {
			if (child.props.value === props.selectedValue) {
				selectedIndex = index;
			}
			items.push({value: child.props.value, label: child.props.label});
		});

		console.log('====================================');
		console.log('WheelPicker._stateFromProps.selectedIndex', selectedIndex);
		console.log('====================================');

		return {selectedIndex, items};
	}

	_onValueChange = (e) => {
		if (this.props.onValueChange) {
			this.props.onValueChange(e.nativeEvent.data);
		}
	}

	render() {
		const {itemStyle: {fontSize: itemTextSize, color: itemTextColor} = {}} = this.props
		return <WheelPickerNative
				{...this.props}
				onValueChange={this._onValueChange}
				data={this.state.items}
				selectedIndex={parseInt(this.state.selectedIndex)}
				itemTextSize={itemTextSize}
				itemTextColor={itemTextColor}
			/>;
	}
}

class Item extends React.Component {
	render () {
		// These items don't get rendered directly.
		return null;
	}
}

WheelPicker.propTypes = {
	data:PropTypes.array,
	onValueChange: PropTypes.func,
	selectedIndex: PropTypes.number,
	itemStyle: PropTypes.object,
	selectedItemTextColor: PropTypes.string,
	itemSpace: PropTypes.number,
	isCurved: PropTypes.bool,
	hasIndicator: PropTypes.bool,
	indicatorColor: PropTypes.string,
	hasCurtain: PropTypes.bool,
	curtainColor: PropTypes.string,
	curtainCornerRadius: PropTypes.number
}

Item.propTypes = {
	value: PropTypes.any, // string or integer basically
	label: PropTypes.string,
}

WheelPicker.Item = Item;

module.exports = WheelPicker;
