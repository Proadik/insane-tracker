import { UserLogin } from '@/features';
import { Routes } from '@/shared';
import { Layout } from 'antd';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const { Header } = Layout;

export const Navbar = () => (
  <Header className={styles.root}>
    <div className={styles.logo}>
      <Link href={Routes.INDEX}>Insane Tracker</Link>
      <span className={styles.version}>v 0.1</span>
    </div>

    <div className={styles.context}>
      <UserLogin />
    </div>
  </Header>
);
