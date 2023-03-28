export interface IButton {
  variant: 'enabled' | 'disabled' | 'archive',
  type: 'long' | 'short',
  text: string,
  onClick: () => void,
  fullWidth?: boolean,
}

export interface IButtonComponent {
  variant: 'enabled' | 'disabled' | 'archive',
  text: string,
  onClick: () => void,
  fullWidth?: boolean,
}

export interface ISpeaker {
  image: string,
  name: string,
  work: string,
}

export interface ISheduleDate {
  date: string,
  dayOfWeek: string,
}

interface IEvent {
  time: string,
  place: string,
  description: string,
  event: boolean,
  live: boolean,
  id: string,
}

export interface ISheduleTableDay {
  date: string,
  isMeasure: boolean,
  events: IEvent[],
}

export interface ISheduleTableTime {
  event: IEvent,
}

export interface IDateParser {
  parseDate(data: string): {
    dateForTable: string;
    time: string;
  }
}
