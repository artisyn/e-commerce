import React from 'react';
import Select from 'react-select';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const optionsForSort = [
	{ value: 'Sort By', label: 'Sort By', isDisabled: true },
	{
		value: 'Price Up',
		label: (
			<div>
				Price <KeyboardArrowUpOutlinedIcon />
			</div>
		),
	},
	{
		value: 'Price Down',
		label: (
			<div>
				Price
				<KeyboardArrowDownOutlinedIcon />
			</div>
		),
	},
	{ value: 'Popular', label: 'Popular' },
	{ value: 'New', label: 'New' },
];

const customStyles = {
	control: (defaultStyles, state) => ({
		...defaultStyles,
		padding: '0.1rem',
		border: '1px solid black',
		width: '6rem',
		'&:selected': {
			border: '1px solid black',
		},
		// border: state.isFocused ? 0 : 0,
		// This line disable the blue border
		boxShadow: state.isFocused ? 0 : 0,
		'&:hover': {
			border: '1px solid black',
		},
	}),
	menu: (provided, state) => ({
		...provided,
		width: '6rem',
		borderBottom: '5px solid black',
		color: 'black',
		padding: '10px',
	}),
	option: (defaultStyles, state) => ({
		...defaultStyles,
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: '#dcdcdc4c',
		},
		color: 'black',
		padding: '.4rem',
		cursor: 'pointer',
	}),
	singleValue: (defaultStyles) => ({
		...defaultStyles,
		padding: '0',
	}),
	valueContainer: (defaultStyles) => ({
		...defaultStyles,
		padding: '0',
	}),
	placeholder: (defaultStyles) => ({
		...defaultStyles,
		padding: '0',
	}),
	dropdownIndicator: (defaultStyles, state) => ({
		...defaultStyles,
		padding: '0',
		color: 'black',
	}),
	indicatorSeparator: (defaultStyles) => ({
		...defaultStyles,
		display: 'none',
	}),
};

const CustomSelect = () => {
	return (
		<Select
			options={optionsForSort}
			defaultValue={optionsForSort[0]}
			isSearchable={false}
			styles={customStyles}
		></Select>
	);
};

export default CustomSelect;
