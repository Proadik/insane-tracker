import { BaseClient } from '@/shared';

export const getUsers = async () => {
  const response = await BaseClient.get('users');
  return response.data;
};

export const getUserDetails = async (userId: string | number) => {
  const response = await BaseClient.get(`users/${userId}`);
  return response.data;
};
