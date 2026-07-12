export type JourneyNodeType = 'module' | 'chest';
export type JourneyNodeStatus = 'completed' | 'current' | 'locked';

export interface JourneyModule {
  id: string;
  type: JourneyNodeType;
  name: string;
  icon: string;
  progressPercent?: number;
  route?: string;
}

export interface JourneyPosition extends JourneyModule {
  status: JourneyNodeStatus;
  x: number;
  y: number;
}