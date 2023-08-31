'use client';

import { Layout } from '@/shared/ui/Layout/Layout';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insane Tracker',
  description: 'Insane Tracker by Insane Tech.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Layout>
            {children}
          </Layout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
