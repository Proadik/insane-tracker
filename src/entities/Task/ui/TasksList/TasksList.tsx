import { Task } from '@/entities';
import { TaskItem } from '@/entities/Task/ui/TaskItem/TaskItem';
import { Col, Row } from 'antd';
import { useCallback } from 'react';

type TasksListProps = {
  handleTask: Function;
  tasks: Task[];
}

export const TasksList = ({ tasks, handleTask }: TasksListProps) => {
  const handleDetails = useCallback((task: Task) => {
    handleTask(task);
  }, [handleTask]);

  return (
    <Row gutter={[16, 16]}>
      {tasks.map((task) => (
        <Col flex={1} key={task.id} span={8}>
          <TaskItem task={task} onClick={handleDetails} />
        </Col>
      ))}
    </Row>
  );
};
