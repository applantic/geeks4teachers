import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
	background-color: #1f1f1f;
	min-height: 100vh;
	overflow: hidden;
	max-height: 100vh;
`;

export const ContentWrapper = styled.div`
	position: relative;
	z-index: 1;
	overflow: hidden;
`;

export const AccentChecker = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 20vh;
	height: 20vh;
`;

export const CheckersWrapper = styled.div<{ grid: { columns: string; rows: string } }>`
	position: absolute;
	right: 0;
	top: 0;
	z-index: 0;
	display: grid;
	align-items: stretch;
	justify-items: stretch;
	${({ grid }) => {
		return {
			gridTemplateColumns: grid.columns,
			gridTemplateRows: grid.rows,
		};
	}}

	margin-bottom: 0;
	border-top: 1px solid rgba(151, 151, 151, 0.24);
	border-left: 1px solid rgba(151, 151, 151, 0.24);
`;

export const Checker = styled.div`
	perspective: 700px;
	transform-style: preserve-3d;
	position: relative;
	border-bottom: 1px solid rgba(151, 151, 151, 0.24);
	border-right: 1px solid rgba(151, 151, 151, 0.24);
`;

export const CheckerBox = styled.div<{ type: string; picture?: string }>`
	width: 20vh;
	height: 20vh;
	position: relative;
	transition: all 0.5s ease;
	height: 100%;
	width: 100%;
	${({ type, picture }) => {
		if (picture) {
			return {
				backgroundImage: `url(${picture});`,
				backgroundSize: 'cover',
			};
		}
		switch (type) {
			case 'red': {
				return {
					backgroundColor: 'rgba(210, 26, 74, 0.12);',
				};
			}
			default: {
				return {};
			}
		}
	}}
`;

