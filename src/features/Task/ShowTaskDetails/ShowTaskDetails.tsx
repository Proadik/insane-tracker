import { Task } from '@/entities';
import styles from '@/entities/Task/ui/TasksList/TasksList.module.scss';
import { Divider, Modal, Space, Statistic, Tag, Typography } from 'antd';
import { DateTime } from 'luxon';

const { Countdown } = Statistic;

export const ShowTaskDetails = ({ task, opened, close }: {
  close: Function;
  opened: boolean;
  task: Task;
}) => {
  const taskCreatedAt = DateTime.fromISO(task.created_at).toFormat('ff');
  const taskDeadline = DateTime.fromISO(task.deadline).toMillis();

  return (
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
      <Space size={40} align="start" direction="horizontal" style={{ width: '100%' }}>
        <div>
          <strong>Status:</strong>
          <br />
          <Tag color="green">{task.status}</Tag>
        </div>
        <div>
          <strong>Deadline:</strong>
          <br />
          <Countdown
            className={styles.countdown}
            format="HH:mm:ss"
            value={taskDeadline}
          />
        </div>
        <div>
          <strong>Priority:</strong>
          <br />
          {task.priority}
        </div>
        <div>
          <strong>Created:</strong>
          <br />
          {taskCreatedAt}
        </div>
        <div>
          <strong>Assigned to:</strong>
          <br />
          {task.user_id}
        </div>
      </Space>
    </Modal>
  );
};
