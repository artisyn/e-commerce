export const FilterFunc = (array, color, size, sortBy) => {
	if (!color && !size && sortBy) return;

	let arrToFilter = [...array];
	let filteredArr = [];

	// first sort by color

	if (color && color !== 'Color') {
		filteredArr = arrToFilter.filter(
			(el) => el.color === color.toLowerCase()
		);
	}
	// keep all colors
	if (color && color === 'Color') {
		filteredArr = arrToFilter;
	}
	// then sort by size
	if (size && size !== 'Size') {
		filteredArr = filteredArr.filter((el) => el.sizes.includes(size));
	}
	// keep all sizes in filtered colors
	if (size && size === 'Size') {
		filteredArr = filteredArr;
	}

	// then sort the array

	if (sortBy === 'Popular') {
		filteredArr = [...filteredArr.sort((a, b) => a.id - b.id)];
	}
	if (sortBy === 'Price (up)') {
		filteredArr = [...filteredArr.sort((a, b) => a.price - b.price)];
	}
	if (sortBy === 'Price (down)') {
		filteredArr = [...filteredArr.sort((a, b) => b.price - a.price)];
	}

	return filteredArr;
};
