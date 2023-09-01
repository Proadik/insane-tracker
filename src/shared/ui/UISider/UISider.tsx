import { Routes } from '@/shared';
import { BarsOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import Link from 'next/link';
import styles from './UISider.module.scss';

export const UISider = () => {
  const menu: MenuProps['items'] = [
    {
      key: 'users',
      label: <Link href={Routes.USERS}>Users</Link>,
      icon: <UserOutlined />,
    },
    {
      key: 'tasks',
      label: <Link href={Routes.TASKS}>Tasks</Link>,
      icon: <BarsOutlined />,
    },
  ];

  return (
    <>
      <Menu
        className={styles.root}
        mode="vertical"
        theme="light"
        items={menu}
      />
    </>
  );
};
