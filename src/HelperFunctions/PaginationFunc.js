export const PaginationFunc = (filteredArr, maxPerPage, currentPage) => {
	// function that calculates total pages based on max items per page;
	const CalculatePages = (arr, amount) => {
		if (arr === amount) return 1;
		if (arr < amount) return 1;
		if (arr > amount && arr % amount === 0) return Math.floor(arr / amount);
		if (arr > amount) return Math.floor(arr / amount) + 1;
	};
	// using that function get total pages number
	const totalPages = CalculatePages(filteredArr.length, maxPerPage);

	// function that creates an array of numbers based on total pages
	const TotalPagesArray = () => {
		let arr = [];
		for (let i = 0; i < totalPages; i++) {
			arr.push(i + 1);
		}
		return arr;
	};

	// create array for page numbers
	const pageNumbersArr = TotalPagesArray();
	// update every time totalPages changes

	//create arr based on filteredArr
	let paginatedArr = [...filteredArr];

	if (totalPages <= 1) paginatedArr = paginatedArr;
	// pagination;
	if (totalPages > 1) {
		if (currentPage === totalPages) {
			const start = currentPage * maxPerPage - maxPerPage;
			const end = paginatedArr.length;
			paginatedArr = [...paginatedArr.slice(start, end)];
		}
		if (currentPage !== totalPages) {
			const start = currentPage * maxPerPage - maxPerPage;
			const end = currentPage * maxPerPage;

			paginatedArr = [...paginatedArr.slice(start, end)];
		}
	}

	// returning

	return [paginatedArr, pageNumbersArr, totalPages];
};
