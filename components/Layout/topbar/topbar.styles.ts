import styled from 'styled-components';

export const TopContainer = styled.div`
	display: flex;
	padding: 0 2em;
	justify-content: center;
	& input:checked ~ .dot {
		transform: translateX(100%);
		background-color: #ffffff;
	}
	& input:checked ~ .drawer {
		background-color: #1c64f2;
	}
	.overlay {
		background-color: rgba(31, 26, 23, var(--tw-bg-opacity));
		--tw-bg-opacity: 0.8;
	}
	@media only screen and (max-width: 768px) {
		padding: 0.5em 0.8em;
	}
	/* @media only screen and (max-width: 1024px) {
    padding: 0;
  } */
`;

export const OverlayDiv = styled.div`
	background-color: rgba(31, 26, 23, var(--tw-bg-opacity));
	--tw-bg-opacity: 0.8;
`;
