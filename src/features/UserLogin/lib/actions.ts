import { BaseClient } from '@/shared/libs/client';

interface LoginPayload {
  password: string;
  username: string;
}

export const loginAction = async (data: LoginPayload) => {
  const res = await BaseClient.post('/auth/login', data);
  return res.data;
};
