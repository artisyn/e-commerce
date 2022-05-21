import { css } from 'styled-components';

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 500px) {
			${props}
		}
	`;
};
export const tablet = (props) => {
	return css`
		@media only screen and (max-width: 780px) {
			${props}
		}
	`;
};
export const tabletMin = (props) => {
	return css`
		@media only screen and (min-width: 780px) {
			${props}
		}
	`;
};

export const desktop = (props) => {
	return css`
		@media only screen and (max-width: 1200px) {
			${props}
		}
	`;
};
export const productCustom = (props) => {
	return css`
		@media only screen and (max-width: 920px) {
			${props}
		}
	`;
};
