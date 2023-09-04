import { useUserStore } from '@/entities/User';
import { loginAction } from '@/features/UserLogin';
import { ErrorBox } from '@/shared/ui';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input, Modal } from 'antd';
import { useCallback } from 'react';

export const LoginModal = ({ isOpen, onCancel, setIsOpen }: {
  isOpen: boolean;
  onCancel: Function;
  setIsOpen: Function;
}) => {
  const setAuthUser = useUserStore((state) => state.setUser);

  const { mutate, isLoading, error, isError } = useMutation(loginAction, {
    onSuccess: (resData) => {
      setAuthUser(resData);
      setIsOpen(false);
    },
  });

  const handleForm = useCallback((values) => {
    const user = {
      username: values.email,
      password: values.password,
    };

    mutate(user);
  }, [mutate]);

  return (
    <Modal
      centered
      title="Login"
      open={isOpen}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={handleForm} layout="vertical" style={{ marginTop: 25 }}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
          required
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          required
        >
          <Input.Password />
        </Form.Item>
        {isError && error && <Form.Item><ErrorBox errorMessage={error.message} /></Form.Item>}
        <Form.Item>
          <Button
            loading={isLoading}
            type="primary"
            size="large"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
