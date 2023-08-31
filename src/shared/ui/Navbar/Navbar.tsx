import { UserLogin } from '@/features';
import { Layout } from 'antd';
import styles from './Navbar.module.scss';

const { Header } = Layout;

export const Navbar = () => (
  <Header className={styles.root}>
    <div className={styles.logo}>
      Insane Tracker
      <span className={styles.version}>v 0.1</span>
    </div>

    <div className={styles.context}>
      <UserLogin />
    </div>
  </Header>
);
