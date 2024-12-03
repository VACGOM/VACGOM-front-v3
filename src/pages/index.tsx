import Head from 'next/head';
import { TestNavigation } from '@/pages/TestNavigation';
import { useAccessToken } from '@/bridge/hooks/useAccessToken';


export default function Home() {
  
  const accessToken = useAccessToken();
  return (
    <>
      <Head>
        <title>Vacgom 백신아 곰아워!</title>
        <meta name="description" content="Vacgom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/favicon.svg" />
      </Head>
      <div>
        루트
        {accessToken && <div>accessToken: {accessToken}</div>}
        <TestNavigation />
      </div>
    </>
  );
}
