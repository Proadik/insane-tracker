import { Task, TaskStatus } from '@/entities';
import { WaitingTaskDetails } from '@/features/Task/ShowTaskDetails/WaitingTaskDetails';
import { Divider, Modal, Typography } from 'antd';
import { ActiveTaskDetails } from './ActiveTaskDetails';

type Props = {
  close: () => void;
  opened: boolean;
  task: Task;
}

export const ShowTaskDetails = ({ task, opened, close }: Props) => (
  <Modal
    open={opened}
    centered
    width={700}
    footer={null}
    onCancel={close}
  >
    <Typography.Title level={4}>{task.title}</Typography.Title>
    <Divider style={{ margin: '20px 0' }} />
    <Typography.Paragraph>{task.description}</Typography.Paragraph>
    <Divider style={{ margin: '20px 0' }} />
    {task.status === TaskStatus.Active && <ActiveTaskDetails task={task} />}
    {task.status === TaskStatus.Waiting && <WaitingTaskDetails task={task} />}
  </Modal>
);
