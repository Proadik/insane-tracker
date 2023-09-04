import { TaskStatus } from '@/entities';
import { Tag } from 'antd';

export const TaskStatusBadge = ({ status }: {
  status: TaskStatus;
}) => (
  <>
    {status === TaskStatus.Waiting && (
      <Tag color="yellow">{status}</Tag>
    )}
    {status === TaskStatus.Active && (
      <Tag color="green">{status}</Tag>
    )}
    {status === TaskStatus.Review && (
      <Tag color="yellow-inverse">{status}</Tag>
    )}
    {status === TaskStatus.Closed && (
      <Tag color="geekblue-inverse">{status}</Tag>
    )}
  </>
);
