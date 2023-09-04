import { Avatar, Card, List } from 'antd';

type Props = {
  id: string;
}

export const TaskActivity = (task: Props) => {
  const activities = [
    {
      title: 'Adil K',
      description: 'Updated deadline...',
    },
    {
      title: 'Ivan A',
      description: 'Created task...',
    },
  ];

  return (
    <Card title="Activity Log" className="activity-card">
      <List
        dataSource={activities}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
