import { ChangeEvent, ReactNode } from 'react';

export interface ICarouselProps {
  children: ReactNode;
}

export interface IInputProps {
  name: string,
  mask: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  callBack: (e: any) => void,
  searchArray: string[],
}

export interface IButtonProps {
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

export interface ISpeakerProps {
  image: string,
  name: string,
  work: string,
}

export interface ISheduleDateProps {
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

export interface ISheduleListData {
  date: string,
  title: string,
  description: string,
  organization: string,
  participants: string,
}

export interface ISheduleListElementProps {
  data: ISheduleListData,
}

export interface ISheduleTableDataProps {
  date: string,
  isMeasure: boolean,
  events: IEvent[],
}
export interface ISheduleTableElementProps {
  data: ISheduleTableDataProps[],
}

export interface ISheduleTableEventProps {
  event: IEvent,
}






export interface IDateParser {
  parseDate(data: string): {
    dateForTable: string;
    dateForList: string,
    time: string;
  }
}
