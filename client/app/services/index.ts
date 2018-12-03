import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { TaskService } from './task.service';

export const services: any[] = [
  AuthService,
  TaskService,
  MessageService,
];

export * from './auth.service';
export * from './task.service';
export * from './message.service';
