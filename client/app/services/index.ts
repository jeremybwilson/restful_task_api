import { TaskService } from './task.service';
import { MessageService } from './message.service';

export const services: any[] = [
  TaskService,
  MessageService,
];

export * from './task.service';
export * from './message.service';
