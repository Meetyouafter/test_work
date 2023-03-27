export interface IButton {
  variant: 'enabled' | 'disabled' | 'archive',
  type: 'long' | 'short',
  text: string,
  fullWidth?: boolean,
}

export interface IButtonComponent {
  variant: 'enabled' | 'disabled' | 'archive',
  text: string,
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
