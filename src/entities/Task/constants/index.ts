export enum TaskStatus {
  Active = 'active',
  Closed = 'closed',
  Review = 'review',
}

export enum TaskPriority {
  High = 'high',
  Medium = 'medium',
  Low = 'low'
}

export const TaskDeadlineDefaults = {
  0.25: '15 min',
  0.5: '30 min',
  1: '1 hour',
  24: '1 day',
  72: '3 days',
};

export interface Task {
  created_at: string;
  deadline: string;
  description: string;
  id: number;
  status: TaskStatus;
  title: string;
  user_id: string;
  priority?: TaskPriority;
}
