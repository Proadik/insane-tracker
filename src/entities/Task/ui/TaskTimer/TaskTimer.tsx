import { Space } from 'antd';
import { useEffect, useState } from 'react';

type Props = {
  hours: number;
  minutes: number;
  seconds: number;
}

export const TaskTimer = ({ hours, minutes, seconds }: Props) => {
  const [ihours, setIhours] = useState(Math.round(Math.abs(hours)));
  const [iminutes, setIminutes] = useState(Math.round(Math.abs(minutes)));
  const [iseconds, setIseconds] = useState(Math.round(Math.abs(seconds)));

  useEffect(() => {
    const timer = setInterval(() => {
      if (iseconds !== 60) {
        setIseconds((prevState) => prevState + 1);
      } else {
        setIseconds(0);
        setIminutes((prevState) => prevState + 1);
      }

      if (iminutes === 60) {
        setIminutes(0);
        setIhours((prevState) => prevState + 1);
      }
    }, 999);

    return (() => {
      clearInterval(timer);
    });
  }, [iminutes, iseconds]);

  return (
    <>
      <Space>
        <p>
          {ihours}:
        </p>
        <p>
          {iminutes}:
        </p>
        <p>
          {iseconds}
        </p>
      </Space>
    </>
  );
};
