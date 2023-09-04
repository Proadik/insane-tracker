import { getUsers } from '@/entities/User/lib/api';
import { Routes } from '@/shared';
import { getRoute } from '@/shared/libs/router';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Button, Card, Space, Table } from 'antd';
import Link from 'next/link';

const Users = () => {
  const { isLoading, error, data } = useQuery({
    queryFn: getUsers,
    queryKey: ['users'],
  });

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      width: 100,
      render: (image) => <Avatar src={image} shape="circle" size="large" style={{ background: '#001529' }} />,
    },
    {
      title: 'Full Name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (_, record) => (
        <>
          {`${record.lastName} ${record.firstName}`}
        </>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Birth Date',
      dataIndex: 'birthDate',
      key: 'birthDate',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Link href={getRoute(Routes.USER_DETAILS, record)}><Button size="small" icon={<EditOutlined />} /></Link>
          <Link href={Routes.PROFILE}><Button size="small" icon={<DeleteOutlined />} /></Link>
        </Space>
      ),
    },
  ];

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Card title={`Users List (${data?.users.length || 0})`}>
      <Table
        rowKey="id"
        dataSource={data?.users}
        columns={columns}
        loading={isLoading}
        size="small"
      />
    </Card>
  );
};

export default Users;
