import { getUserDetails } from '@/entities/User/lib/api';
import { useQuery } from '@tanstack/react-query';
import { Card, Descriptions, Spin } from 'antd';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const UserDetails = () => {
  const userId = useRouter().query.id;
  const { isLoading, data, error } = useQuery(['users', userId], () => getUserDetails(String(userId)), {
    enabled: !!userId,
  });

  const details = useMemo(() => data && Object.entries(data).map((item) => ({
    key: item[0],
    label: item[0],
    children: typeof item[1] === 'object' ? '-' : item[1],
  })), [data]);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <>{error.message}</>;
  }

  if (!details) {
    return;
  }

  return (
    <Card title="User Details">
      <Descriptions
        bordered
        size="middle"
        items={details}
        labelStyle={{ fontWeight: 'bold' }}
      />
    </Card>
  );
};

export default UserDetails;
