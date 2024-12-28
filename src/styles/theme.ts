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
    font-size: 6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 7.5rem;
    letter-spacing: -0.15rem;
  `,
	display2: css`
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 5.5rem;
    letter-spacing: -0.09rem;
  `,
	display3: css`
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 4.5rem;
    letter-spacing: -0.06563rem;
  `,
	display4: css`
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.75rem;
    letter-spacing: -0.045rem;
  `,
	display5: css`
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.75rem;
    letter-spacing: -0.02813rem;
  `,
	display6: css`
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.375rem;
    letter-spacing: -0.01875rem;
  `,
	
	// Headline
	headline1: css`
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: -0.02rem;
  `,
	headline2: css`
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.25rem;
    letter-spacing: -0.01313rem;
  `,
	headline3: css`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    letter-spacing: -0.0075rem;
  `,
	headline4: css`
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
    letter-spacing: 0;
  `,
	headline5: css`
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0;
  `,
	headline6: css`
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.375rem;
  `,
	
	// Title
	title1: css`
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.625rem;
    letter-spacing: -0.05rem;
  `,
	title2: css`
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.375rem;
    letter-spacing: -0.04375rem;
  `,
	title3: css`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.125rem;
    letter-spacing: -0.0375rem;
  `,
	title4: css`
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
    letter-spacing: -0.03125rem;
  `,
	title5: css`
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
    letter-spacing: -0.02813rem;
  `,
	
	// Body
	body1: css`
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
  `,
	body2: css`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  `,
	body3: css`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
  `,
	
	// Caption
	caption1: css`
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: -0.02031rem;
  `,
	caption2: css`
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: -0.01875rem;
  `,
	caption3: css`
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: -0.01719rem;
  `,
	
	// Button
	button1: css`
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
  `,
	button2: css`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: -0.02188rem;
  `,
	button3: css`
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.125rem;
    letter-spacing: -0.02031rem;
  `,
	button4: css`
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.125rem;
    letter-spacing: -0.01875rem;
  `,
};

export const theme = { colors, fonts };
