import { LoginModal, useUserStore } from '@/entities/User';
import { Routes } from '@/shared';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Link from 'next/link';
import { useCallback, useState } from 'react';

export const UserLogin = () => {
  const user = useUserStore((state) => state.user);
  const setAuthUser = useUserStore((state) => state.setUser);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = useCallback((modalState: boolean) => {
    setIsOpen(modalState);
  }, []);

  const handleLogout = useCallback(() => {
    setAuthUser(null);
  }, [setAuthUser]);

  return (
    <div>
      {!user ? (
        <div>
          <Button onClick={() => handleLogin(true)} type="primary">
            Login
          </Button>
          <LoginModal
            isOpen={isOpen}
            onCancel={() => handleLogin(false)}
            setIsOpen={setIsOpen}
          />
        </div>
      ) : (
        <div>
          <Space>
            <Link href={Routes.PROFILE}>
              <Button type="default" icon={<UserOutlined />}>
                Profile
              </Button>
            </Link>
            <Button onClick={handleLogout} icon={<LogoutOutlined />} />
          </Space>
        </div>
      )}
    </div>
  );
};
