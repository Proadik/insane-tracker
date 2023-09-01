import { User } from '@/entities/User/lib';
import { List } from 'antd';

export const ProfileInfo = ({ info, except }: {
  info: User;
  except?: string[];
}) => {
  const items = Object.entries(info).filter((item) => !except?.includes(item[0]));

  return (
    <>
      <List
        bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            {`${item[0]}: `}
            <strong>{item[1]}</strong>
          </List.Item>
        )}
      />
    </>
  );
};
