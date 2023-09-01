import { Task, TaskPriority, TaskStatus, TasksList } from '@/entities/Task';
import { AddTask, ShowTaskDetails } from '@/features';
import { Card } from 'antd';
import { useCallback, useState } from 'react';

const TasksPage = () => {
  const [selectedTask, setSelectedTask] = useState<Task>(null);
  const tasks: Task[] = [
    {
      id: 1,
      title: 'New render type Array with string, number, json in settings modal',
      user_id: '15',
      description: 'Description - Do something nice for someone I care about',
      created_at: '2023-09-01T08:30:00',
      deadline: '2023-09-02T08:30:00',
      status: TaskStatus.Active,
      priority: TaskPriority.Medium,
    },
    {
      id: 2,
      title: 'Fix Datatransfer - dublicates datacards / dataforms',
      user_id: '15',
      description: 'Description - Do something nice for someone I care about',
      created_at: '2023-09-01T21:30:00',
      deadline: '2023-09-04T22:30:00',
      status: TaskStatus.Active,
      priority: TaskPriority.High,
    },
    {
      id: 3,
      title: 'Node.js SQLite: Build a simple REST API with Express step-by-step',
      user_id: '15',
      description: 'Node.js can be used very well with relational databases and SQLite is no exception. In this post, we will build a simple REST API for Quotes step-by-step with SQLite and Node.js using the Express Js framework step-by-step.',
      created_at: '2023-09-01T21:30:00',
      deadline: '2023-09-08T21:30:00',
      status: TaskStatus.Active,
      priority: TaskPriority.Low,
    },
  ];

  const hanldeTaskDetails = useCallback((task: Task) => {
    setSelectedTask(task);
  }, []);

  return (
    <Card title="Tasks" extra={<AddTask />}>
      <TasksList handleTask={hanldeTaskDetails} tasks={tasks} />
      {selectedTask && <ShowTaskDetails task={selectedTask} opened={!!selectedTask} close={() => setSelectedTask(null)} />}
    </Card>
  );
};

export default TasksPage;
