// Returns Amharic time of day label for Ethiopian time
// 6:00 AM - 11:59 AM: ጥዋት
// 12:00 PM - 5:59 PM: ከሰዓት
// 6:00 PM - 11:59 PM: ማታ
// 12:00 AM - 5:59 AM: ሌሊት

export function getEthiopianTimeOfDay(date) {
  if (!date) return '';
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) return 'ጥዋት';
  if (hour >= 12 && hour < 18) return 'ከሰዓት';
  if (hour >= 18 && hour < 24) return 'ማታ';
  return 'ሌሊት';
}
