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
		font-size: 3.5rem;
		font-style: normal;
		font-weight: 600;
		line-height: 4.5rem; /* 128.571% */
		letter-spacing: -0.0875rem;
	`,
	display2: css`
		font-size: 3rem;
		font-style: normal;
		font-weight: 600;
		line-height: 3.875rem; /* 129.167% */
		letter-spacing: -0.075rem;
	`,
	display3: css`
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 600;
		line-height: 3.25rem; /* 130% */
		letter-spacing: -0.0625rem;
	`,
	display4: css`
		font-size: 2.25rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.75rem; /* 122.222% */
		letter-spacing: -0.05625rem;
	`,
	display5: css`
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.625rem; /* 131.25% */
		letter-spacing: -0.05rem;
	`,
	display6: css`
		font-size: 1.75rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.375rem; /* 135.714% */
		letter-spacing: -0.04375rem;
	`,
	
	// Headline
	headline1: css`
		font-size: 2rem;
		font-style: normal;
		font-weight: 700;
		line-height: 2.625rem; /* 131.25% */
		letter-spacing: -0.05rem;
	`,
	headline2: css`
		font-size: 1.75rem;
		font-style: normal;
		font-weight: 700;
		line-height: 2.375rem; /* 135.714% */
		letter-spacing: -0.04375rem;
	`,
	headline3: css`
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: 2.125rem; /* 141.667% */
		letter-spacing: -0.0375rem;
	`,
	headline4: css`
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.75rem; /* 140% */
		letter-spacing: -0.03125rem;
	`,
	headline5: css`
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.625rem; /* 144.444% */
		letter-spacing: -0.02813rem;
	`,
	headline6: css`
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.5rem; /* 150% */
		letter-spacing: -0.025rem;
	`,
	
	// Title
	title1: css`
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.125rem; /* 141.667% */
		letter-spacing: -0.0375rem;
	`,
	title2: css`
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.75rem; /* 140% */
		letter-spacing: -0.03125rem;
	`,
	title3: css`
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.625rem; /* 144.444% */
		letter-spacing: -0.02813rem;
	`,
	title4: css`
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.5rem; /* 150% */
		letter-spacing: -0.025rem;
	`,
	
	// Body
	body1: css`
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.625rem; /* 144.444% */
		letter-spacing: -0.02813rem;
	`,
	body2: css`
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.5rem; /* 150% */
		letter-spacing: -0.025rem;
	`,
	body3: css`
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.25rem; /* 142.857% */
		letter-spacing: -0.02188rem;
	`,
	body4: css`
		font-size: 0.8125rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.125rem; /* 138.462% */
		letter-spacing: -0.02031rem;
	`,
	// Caption
	caption1: css`
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.5rem; /* 150% */
		letter-spacing: -0.025rem;
	`,
	caption2: css`
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 142.857% */
		letter-spacing: -0.02188rem;
	`,
	caption3: css`
		font-size: 0.8125rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.125rem; /* 138.462% */
		letter-spacing: -0.02031rem;
	`,
	caption4: css`
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.125rem; /* 150% */
		letter-spacing: -0.01875rem;
	`,
	
	// Button
	button1: css`
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.5rem; /* 150% */
		letter-spacing: -0.025rem;
	`,
	button2: css`
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.25rem; /* 142.857% */
		letter-spacing: -0.02188rem;
	`,
	button3: css`
		font-size: 0.8125rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.125rem; /* 138.462% */
		letter-spacing: -0.02031rem;
	`,
	button4: css`
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.125rem; /* 150% */
    letter-spacing: -0.01875rem;
  `,
};

export const theme = { colors, fonts };
