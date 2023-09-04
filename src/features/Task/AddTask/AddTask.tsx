import { pluralize } from '@/shared';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Modal, Select, Space } from 'antd';
import { useCallback, useMemo, useState } from 'react';
import { TaskDeadlineDefaults, TaskPriority } from '@/entities';

export const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deadlineItem, setDeadlineItem] = useState('0');
  const [deadlineRange, setDeadlineRange] = useState(TaskDeadlineDefaults);
  const sortedDeadlineRange = useMemo(() => Object.entries(deadlineRange).sort(), [deadlineRange]);

  const handleSubmit = useCallback((values) => {
    console.log('AddTask.tsx - 14 - ', values);
  }, []);

  return (
    <>
      <Button size="middle" onClick={() => setIsOpen(true)} type="primary">Add Task</Button>
      <Modal
        title="Add Task"
        centered
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <br />
        <Form onFinish={handleSubmit} layout="vertical">
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea size="large" />
          </Form.Item>
          <Form.Item label="Assing to" name="user_id">
            <Select showSearch>
              <Select.Option value="Adil">Adil</Select.Option>
              <Select.Option value="Diana">Diana</Select.Option>
              <Select.Option value="Doshzan">Doshzan</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Priority" name="priority">
            <Select showSearch>
              {Object.values(TaskPriority).map((item) => <Select.Option key={item} value={item}>{item}</Select.Option>)}
            </Select>
          </Form.Item>
          <Form.Item name="deadline" label="Deadline">
            <Select
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <Divider />
                  <Space style={{ padding: '0 8px 4px' }}>
                    <Input
                      style={{ width: '100%' }}
                      onChange={(e) => setDeadlineItem(e.target.value)}
                      placeholder="Enter custom amount (in hours)"
                    />
                    <Button
                      type="text"
                      onClick={() => setDeadlineRange({ ...deadlineRange, [deadlineItem]: `${pluralize(Number(deadlineItem / 24), 'day')}` })}
                      icon={<PlusOutlined />}
                    >
                      Add item
                    </Button>
                  </Space>
                </>
              )}
              allowClear
            >
              {sortedDeadlineRange.map((value, index) => (
                <Select.Option key={index} value={value[0]}>{value[1]}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" size="large">Save</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
