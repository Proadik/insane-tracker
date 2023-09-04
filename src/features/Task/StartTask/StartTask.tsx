import { Button, message } from 'antd';
import { useCallback } from 'react';

export const StartTask = ({ taskId }: {
  taskId: number;
}) => {
  const handleStartTask = useCallback(() => {
    message.success('Task started...');
  }, []);

  return (
    <>
      <Button type="primary" size="small" onClick={handleStartTask}>Start</Button>
    </>
  );
};
