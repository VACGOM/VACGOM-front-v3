import { css } from '@emotion/react';

const colors = {
	Black: '#000000',
	Gray900: '#191F28',
	Gray800: '#333D4B',
	Gray700: '#4E5968',
	Gray600: '#6B7684',
	Gray500: '#8B95A1',
	Gray400: '#B0B8C1',
	Gray300: '#D1D6DB',
	Gray200: '#E5E8EB',
	Gray100: '#F2F4F6',
	Gray50: '#F9FAFB',
	White: '#FFFFFF',
	Ibory: 'rgba(189,210,225,0.38)',
	
	Primary: '#4196FD',
	PrimaryLight: '#0067FF1A',
	PrimaryDark: '#3a83de',
	Secondary: '#86D37F',
	SecondaryLight: 'rgba(134, 211, 127, 0.10)',
	Error: '#DA1E28',
	ErrorLight: '#FF57611A',
	Kakao: '#F1DA2A',
	KakaoDark: '#ceba24',
	Secondary02: '#F2B81E',
	Yellow: '#FFBB05',
};

const fonts = {
	// Display
	display1: css`
		font-size: 5.6rem;
		font-style: normal;
		font-weight: 600;
		line-height: 7.2rem; /* 128.571% */
		letter-spacing: -0.14rem;
	`,
	display2: css`
		font-size: 4.8rem;
		font-style: normal;
		font-weight: 600;
		line-height: 6.2rem; /* 129.167% */
		letter-spacing: -0.12rem;
	`,
	display3: css`
		font-size: 4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 5.2rem; /* 130% */
		letter-spacing: -0.1rem;
	`,
	display4: css`
		font-size: 3.6rem;
		font-style: normal;
		font-weight: 600;
		line-height: 4.4rem; /* 122.222% */
		letter-spacing: -0.09rem;
	`,
	display5: css`
		font-size: 3.2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 4.2rem; /* 131.25% */
		letter-spacing: -0.08rem;
	`,
	display6: css`
		font-size: 2.8rem;
		font-style: normal;
		font-weight: 600;
		line-height: 3.8rem; /* 135.714% */
		letter-spacing: -0.07rem;
	`,
	
	// Headline
	headline1: css`
		font-size: 3.2rem;
		font-style: normal;
		font-weight: 700;
		line-height: 4.2rem; /* 131.25% */
		letter-spacing: -0.08rem;
	`,
	headline2: css`
		font-size: 2.8rem;
		font-style: normal;
		font-weight: 700;
		line-height: 3.8rem; /* 135.714% */
		letter-spacing: -0.07rem;
	`,
	headline3: css`
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 700;
		line-height: 3.4rem; /* 141.667% */
		letter-spacing: -0.06rem;
	`,
	headline4: css`
		font-size: 2rem;
		font-style: normal;
		font-weight: 700;
		line-height: 2.8rem; /* 140% */
		letter-spacing: -0.05rem;
	`,
	headline5: css`
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 700;
		line-height: 2.6rem; /* 144.444% */
		letter-spacing: -0.045rem;
	`,
	headline6: css`
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 700;
		line-height: 2.4rem; /* 150% */
		letter-spacing: -0.04rem;
	`,
	
	// Title
	title1: css`
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 3.4rem; /* 141.667% */
		letter-spacing: -0.06rem;
	`,
	title2: css`
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.8rem; /* 140% */
		letter-spacing: -0.05rem;
	`,
	title3: css`
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.6rem; /* 144.444% */
		letter-spacing: -0.045rem;
	`,
	title4: css`
		font-family: Pretendard;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.4rem; /* 150% */
		letter-spacing: -0.04rem;
	`,
	
	// Body
	body1: css`
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.6rem; /* 144.444% */
		letter-spacing: -0.045rem;
	`,
	body2: css`
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.4rem; /* 150% */
		letter-spacing: -0.04rem;
	`,
	body3: css`
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2rem; /* 142.857% */
		letter-spacing: -0.035rem;
	`,
	body4: css`
		font-size: 1.3rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.8rem; /* 138.462% */
		letter-spacing: -0.0325rem;
	`,
	body5: css`
		font-size: 1.2rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.8rem; /* 150% */
		letter-spacing: -0.03rem;
	`,
	
	// Caption
	caption1: css`
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2.4rem; /* 150% */
		letter-spacing: -0.04rem;
	`,
	caption2: css`
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2rem; /* 142.857% */
		letter-spacing: -0.035rem;
	`,
	caption3: css`
		font-size: 1.3rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.8rem; /* 138.462% */
		letter-spacing: -0.0325rem;
	`,
	caption4: css`
		font-size: 1.2rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.8rem; /* 150% */
		letter-spacing: -0.03rem;
	`,
	
	// Button
	button1: css`
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.4rem; /* 150% */
		letter-spacing: -0.04rem;
	`,
	button2: css`
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2rem; /* 142.857% */
		letter-spacing: -0.035rem;
	`,
	button3: css`
		font-size: 1.3rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.8rem; /* 138.462% */
		letter-spacing: -0.0325rem;
	`,
	button4: css`
		font-size: 1.2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.8rem; /* 150% */
		letter-spacing: -0.03rem;
	`,
};

export const theme = { colors, fonts };