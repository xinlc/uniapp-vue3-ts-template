import dayjs from 'dayjs';

export enum FormatType {
  toMinute = 'YYYY-MM-DD HH:mm',
  toHour = 'YYYY-MM-DD HH',
  toDay = 'YYYY-MM-DD',
  toMonth = 'YYYY-MM',
  year = 'YYYY',
  toSecond = 'YYYY-MM-DD HH:mm:ss',
}

type DateFormat = FormatType | string;

type IDate = Date | string;

/**
 * 格式化日期
 * @param date - 日期 默认为当天
 * @param format - 格式 默认为YYYY-MM-DD HH:mm
 */
export function formatDate(date?: IDate, format: DateFormat = FormatType.toSecond): string {
  if (!date) date = new Date();

  return dayjs(date).format(format);
}

/**
 * 获取当前时间
 * @param format - 格式 默认为YYYY-MM-DD
 */
export function getNow(format: DateFormat = FormatType.toDay): string {
  return dayjs().format(format);
}

/**
 * 获取月第一天
 * @param date - 日期 默认为当天
 * @param format - 格式 默认为YYYY-MM-DD
 */
export function getFirstDayOfMonth(date?: IDate, format: DateFormat = FormatType.toDay): string {
  if (!date) date = new Date();

  return dayjs(date).startOf('month').format(format);
}

/**
 * 获取月最后一天
 * @param date - 日期 默认为当天
 * @param format - 格式 默认为YYYY-MM-DD
 */
export function getLastDayOfMonth(date?: IDate, format: DateFormat = FormatType.toDay): string {
  if (!date) date = new Date();

  return dayjs(date).endOf('month').format(format);
}

/**
 * 获取整月
 * @param date - 日期 默认为当天
 * @param format - 格式 默认为YYYY-MM-DD
 */
export function getDaysOfMonth(date?: IDate, format: DateFormat = FormatType.toDay): string[] {
  return [getFirstDayOfMonth(date, format), getLastDayOfMonth(date, format)];
}

/**
 * 获取上个月
 * @param format - 格式 默认为YYYY-MM-DD
 */
export function getDaysOfLastMonth(format = FormatType.toDay): string[] {
  const month = dayjs().subtract(1, 'month').toDate();
  return [getFirstDayOfMonth(month, format), getLastDayOfMonth(month, format)];
}

/**
 * 获取月第一天 到 现在
 * @param format - 格式 默认为YYYY-MM-DD
 */
export function getDaysToNowOfMonth(date?: IDate, format = FormatType.toDay): string[] {
  return [getFirstDayOfMonth(date, format), getNow(format)];
}

/**
 * 获取年第一天
 * @param date - 日期 默认为当年
 * @param format - 格式 默认为YYYY-MM-DD
 * @returns
 */
export function getFirstDayOfYear(date?: IDate, format = FormatType.toDay): string {
  if (!date) date = new Date();

  return dayjs(date).startOf('year').format(format);
}

/**
 * 本周
 */
export function getDaysOfWeek(format = FormatType.toDay): string[] {
  return [dayjs().startOf('week').format(format), dayjs().endOf('week').format(format)];
}

/**
 * d2是否在d1之后
 * @param d1 - 日期1
 * @param d2 - 日期2 默认为当前时间
 */
export function isAfter(d1: IDate, d2: IDate = new Date()): boolean {
  return dayjs(d2).isAfter(d1);
}

/**
 * d2是否在d1之前
 * @param d1 - 日期1
 * @param d2 - 日期2 默认为当前时间
 */
export function isBefore(d1: IDate, d2: IDate = new Date()): boolean {
  return dayjs(d2).isBefore(d1);
}

/**
 * d3是否在d1与d2之间
 * @param d1 - 日期1
 * @param d2 - 日期2
 * @param d3 - 日期3 默认为当前时间
 * @returns
 */
export function isBetween(d1: IDate, d2: IDate, d3: IDate = new Date()): boolean {
  return isAfter(d1, d3) && isBefore(d2, d3);
}

/**
 * 加几天
 * @param days - 天数 默认为1
 * @param d - 日期 默认为当天
 * @param format - 格式 默认为YYYY-MM-DD
 * @returns
 */
export function addDays(days = 1, d: IDate = new Date(), format = FormatType.toDay): IDate {
  return dayjs(d).add(days, 'day').format(format);
}

/**
 * 减几天
 * @param days - 天数 默认为1
 * @param d - 日期 默认为当天
 * @param format - 格式 默认为YYYY-MM-DD
 * @returns
 */
export function subDays(days = 1, d: IDate = new Date(), format = FormatType.toDay): IDate {
  return dayjs(d).subtract(days, 'day').format(format);
}

/**
 * 转换成 Date
 */
export function toDate(date: string | string[]) {
  if (typeof date === 'string') return dayjs(date).toDate();

  return date.map(item => dayjs(item).toDate());
}
