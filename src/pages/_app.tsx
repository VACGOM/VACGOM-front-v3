import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'react-tooltip/dist/react-tooltip.css';
import { useRouter } from 'next/navigation';
import { VacBridgeProvider } from '@/bridge/VacBridgeProvider';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/globalStyles';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter(); // Initialize router
  
  // const checkToken = () => {
  //   const accessToken = LocalStorage.getItem('accessToken');
  //   if (!accessToken) {
  //     router.push(PATH.root); // Use router.push instead of window.location.href
  //   }
  // };
  //
  // useEffect(() => {
  //   checkToken();
  // }, []);
  
  return (
    <>
      <Script
        strategy="afterInteractive" //"beforeInteractive"으로 찾았는데 경고메세지때문에 바꿈
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <VacBridgeProvider>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <Component {...pageProps} />
        </ThemeProvider>
      </VacBridgeProvider>
    </>
  );
}

export default MyApp;
