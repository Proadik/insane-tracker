import { Task, TaskActivity, TaskStatusBadge } from '@/entities';
import { TaskTimer } from '@/entities/Task/ui/TaskTimer/TaskTimer';
import { Divider, Space, Statistic } from 'antd';
import { DateTime } from 'luxon';

const { Countdown } = Statistic;

export const ActiveTaskDetails = ({ task }: {
  task: Task;
}) => {
  const taskCreatedAt = DateTime.fromISO(task.created_at).toFormat('ff');
  const taskDeadline = DateTime.fromISO(task.deadline).toMillis();
  const taskStartedAt = task.started_at && DateTime.fromISO(task.started_at).diffNow(['hours', 'minutes', 'seconds']);

  if (!taskStartedAt) {
    return;
  }

  return (
    <>
      <Space size={40} align="start" direction="horizontal" style={{ width: '100%' }}>
        <div>
          <strong>Status:</strong>
          <br />
          <TaskStatusBadge status={task.status} />
        </div>
        <div>
          <strong>Deadline:</strong>
          <br />
          <Countdown
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
      <TaskTimer
        hours={taskStartedAt.hours}
        minutes={taskStartedAt.minutes}
        seconds={taskStartedAt.seconds}
      />
      <Divider style={{ margin: '20px 0' }} />
      <TaskActivity id={String(task.id)} />
    </>
  );
};
