'use client';

import { Task } from '@/entities/Task';
import { Card, Col, Divider, Row, Space, Statistic, Tag, Typography } from 'antd';
import { DateTime } from 'luxon';
import { useCallback } from 'react';
import styles from './TasksList.module.scss';

const { Countdown } = Statistic;

export const TasksList = ({ tasks, handleTask }: {
  handleTask: Function;
  tasks: Task[];
}) => {
  const handleDetails = useCallback((task: Task) => {
    handleTask(task);
  }, [handleTask]);

  return (
    <Row gutter={[16, 16]}>
      {tasks.map((task) => {
        const taskDeadline = DateTime.fromISO(task.deadline).toMillis();

        return (
          <Col flex={1} key={task.id} span={8}>
            <Card onClick={() => handleDetails(task)} hoverable className={styles.card} bordered>
              <div className={styles.cardTop}>
                <Typography.Title level={5}>{task.title}</Typography.Title>
              </div>
              <div>
                <Divider />
                <Space align="center" className={styles.cardSpace}>
                  <Tag color="green">{task.status}</Tag>
                  <Countdown
                    className={styles.countdown}
                    format="HH:mm:ss"
                    value={taskDeadline}
                  />
                </Space>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
