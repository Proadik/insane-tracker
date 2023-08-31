'use client';

import { Navbar } from '@/shared/ui';
import { ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import '../../styles/app.scss';

const { Footer, Sider, Content } = AntLayout;

export const Layout = ({ children }: {
  children: ReactNode;
}) => (
  <>
    <Navbar />
    <Sider>Sider</Sider>
    <Content>{children}</Content>
    <Footer>Footer</Footer>
  </>
);
