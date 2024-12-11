export interface ITodo {
  id: string;
  name: string;
  complete: boolean;
}

export enum ControlBtns {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
