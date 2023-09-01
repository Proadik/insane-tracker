import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

interface UserStore {
  setUser: (user: User | null) => void;
  user: User;
}

export const useUserStore = create<UserStore>(persist(
  (set) => ({
    user: null,
    setUser: (user) => set(() => ({ user })),
  }),
  {
    name: 'user',
  },
));
