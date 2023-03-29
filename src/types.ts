import { ChangeEvent } from 'react';

export interface IInitialState {
  phones: string[];
}

export interface IInputPage {
  phones: string[],
}

export interface IInputForm {
  name: string,
  mask: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  callBack: (e: any) => void,
  searchArray: string[],
}

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

export interface ISpeakerProps {
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

export interface ISheduleListData {
  date: string,
  title: string,
  description: string,
  organization: string,
  participants: string,
}

export interface ISheduleListElement {
  data: ISheduleListData,
}

export interface ISheduleTableData {
  date: string,
  isMeasure: boolean,
  events: IEvent[],
}
export interface ISheduleTableElement {
  data: ISheduleTableData[],
}

export interface ISheduleTableEvent {
  event: IEvent,
}

export interface IDateParser {
  parseDate(data: string): {
    dateForTable: string;
    dateForList: string,
    time: string;
  }
}
