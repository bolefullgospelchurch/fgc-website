// Utility for Ethiopian date conversion and time adjustment
// Uses EthioAll API for date conversion

const ETHIOALL_API = 'https://api.ethioall.com/convert/api';

const ethiopianDateCache = {};

export async function convertToEthiopianDate(date) {
  if (!date) return null;
  const key = date.toISOString().split('T')[0];
  if (ethiopianDateCache[key]) return ethiopianDateCache[key];
  try {
    const res = await fetch(`${ETHIOALL_API}?gc=${key}`);
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    const record = Array.isArray(data) ? data[0] : null;
    if (record && record.type === 'toEthiopian') {
      const payload = {
        year: record.year,
        month: record.month_name?.amharic,
        day: record.day,
        weekday: record.day_name?.amharic
      };
      ethiopianDateCache[key] = payload;
      return payload;
    }
  } catch (e) {
    // fallback: return null
  }
  return null;
}

// Adjusts time for Ethiopian clock (adds 6 hours, 12-hour format, no AM/PM)
export function toEthiopianTime(date) {
  if (!date) return '';
  let hour = date.getHours() + 6;
  if (hour >= 24) hour -= 24;
  let displayHour = hour % 12;
  if (displayHour === 0) displayHour = 12;
  const minute = date.getMinutes();
  return `${displayHour}:${minute.toString().padStart(2, '0')}`;
}

// Returns { year, month, day, weekday } from ISO string or Date
export function parseFullDateParts(date, locale = 'en', ethiopian = null) {
  if (!date) return null;
  if (ethiopian) {
    // ethiopian: { year, month, day, weekday }
    return ethiopian;
  }
  const d = typeof date === 'string' ? new Date(date) : date;
  return {
    year: d.getFullYear(),
    month: d.toLocaleString(locale, { month: 'long' }),
    day: d.getDate(),
    weekday: d.toLocaleString(locale, { weekday: 'long' })
  };
}
