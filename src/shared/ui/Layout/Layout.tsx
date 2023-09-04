import { Navbar } from '@/shared/ui';
import { UISider } from '@/shared/ui/UISider/UISider';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import '../../styles/app.scss';
import styles from './Layout.module.scss';

const { Content } = AntLayout;

export const Layout = ({ children }: {
  children: ReactNode;
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <Navbar />
        <Content className={styles.root}>
          <UISider />
          <div className={styles.content}>{children}</div>
        </Content>
      </div>
    </QueryClientProvider>
  );
};
