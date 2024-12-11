export interface ITodo {
  id: number;
  name: string;
  complete: boolean;
}

export enum ControlBtns {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
