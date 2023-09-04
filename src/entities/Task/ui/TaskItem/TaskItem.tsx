import { Task, TaskStatus, TaskStatusBadge } from '@/entities';
import { TaskTimer } from '@/entities/Task/ui/TaskTimer/TaskTimer';
import { StartTask } from '@/features/Task/StartTask/StartTask';
import { Card, Divider, Space, Typography } from 'antd';
import { DateTime } from 'luxon';
import styles from './TaskItem.module.scss';

type TaskItemProps = {
  onClick: Function;
  task: Task;
}

export const TaskItem = ({ task, onClick }: TaskItemProps) => {
  const startedAt = task.started_at && DateTime.fromISO(task.started_at).diffNow(['hours', 'minutes', 'seconds']);
  return (
    <>
      <Card className={styles.card} bordered>
        <div className={styles.cardTop} onClick={() => onClick(task)}>
          <Typography.Title level={5}>{task.title}</Typography.Title>
        </div>
        <div>
          <Divider />
          <Space align="center" className={styles.cardSpace}>
            <TaskStatusBadge status={task.status} />
            {task.status === TaskStatus.Active && (
              <TaskTimer
                hours={startedAt.hours}
                minutes={startedAt.minutes}
                seconds={startedAt.seconds}
              />
            )}
            {task.status === TaskStatus.Waiting && <StartTask taskId={task.id} />}
            {task.status === TaskStatus.Closed && (
              <p className={styles.closedStatus}>
                Closed at:
                {` ${DateTime.fromISO(task.deadline).toFormat('dd.LL.yy HH:mm:ss')}`}
              </p>
            )}
          </Space>
        </div>
      </Card>
    </>
  );
};
