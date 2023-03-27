import { IDateParser } from '../../types';

const getParseDate: IDateParser = {
  parseDate: (data: string) => {
    const date = new Date(data);

    const [month, day, dayOfWeek, hour, minutes] = [
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCDay(),
      date.getUTCHours(),
      date.getUTCMinutes(),
    ];

    const parseMonth: { [key: number]: string } = {
      0: 'января',
      1: 'февраля',
      2: 'марта',
      3: 'апреля',
      4: 'мая',
      5: 'июня',
      6: 'июля',
      7: 'августа',
      8: 'сентября',
      9: 'октября',
      10: 'ноября',
      11: 'декабря',
    };

    const parseDayOfWeek: { [key: number]: string } = {
      0: 'ВС',
      1: 'ПН',
      2: 'ВТ',
      3: 'СР',
      4: 'ЧТ',
      5: 'ПТ',
      6: 'СБ',
    };

    const getTime = (time: number) => {
      if (time < 10) {
        return `0${time}`;
      }
      return `${time}`;
    };

    return {
      dateForTable: `${day} ${parseMonth[month]}, ${parseDayOfWeek[dayOfWeek]}`,
      time: `${getTime(hour)}:${getTime(minutes)}`,
    };
  },
};

export default getParseDate;
