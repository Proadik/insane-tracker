import { LoginModal } from '@/entities/User/ui/LoginModal/LoginModal';
import { Button } from 'antd';
import { useCallback, useState } from 'react';

export const UserLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = useCallback((modalState: boolean) => {
    setIsOpen(modalState);
  }, []);

  return (
    <>
      <Button onClick={() => handleLogin(true)} type="primary">
        Login
      </Button>
      <LoginModal
        isOpen={isOpen}
        onCancel={() => handleLogin(false)}
      />
    </>
  );
};
