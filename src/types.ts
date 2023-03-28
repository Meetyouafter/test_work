export interface IButton {
  variant: 'check' | 'archive',
  type: 'long' | 'short',
  text: string,
  onClick: () => void,
  fullWidth?: boolean,
}

export interface IButtonComponent {
  variant: 'check' | 'archive',
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

export interface ISheduleTableElement {
  date: string,
  isMeasure: boolean,
  events: IEvent[],
}

export interface ISheduleTableEvent {
  event: IEvent,
}

export interface IDateParser {
  parseDate(data: string): {
    dateForTable: string;
    time: string;
  }
}
