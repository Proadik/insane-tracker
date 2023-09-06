import { Layout } from '@/shared';
import HydrationZustand from '@/shared/ui/HydrationZustand/HydrationZustand';
import { AppProps } from 'next/app';
import '../shared/styles/app.scss';

export const Application = ({ Component, pageProps }: AppProps) => (
  <HydrationZustand>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </HydrationZustand>
);

export default Application;
