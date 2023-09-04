import { ProfileInfo } from '@/entities';
import { useUserStore } from '@/entities/User/lib/store';
import { Typography } from 'antd';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  if (!user) {
    return router.push('/');
  }

  return (
    <>
      <Typography.Title level={3}>Profile</Typography.Title>
      <ProfileInfo info={user} except={['token']} />
    </>
  );
};

export default ProfilePage;
