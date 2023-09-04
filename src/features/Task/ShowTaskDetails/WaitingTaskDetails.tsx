import { Task } from '@/entities';
import { StartTask } from '@/features/Task/StartTask/StartTask';
import { Space } from 'antd';

type Props = {
  task: Task;
}

export const WaitingTaskDetails = ({ task }: Props) => (
  <Space>
    <StartTask taskId={task.id} />
  </Space>
);
