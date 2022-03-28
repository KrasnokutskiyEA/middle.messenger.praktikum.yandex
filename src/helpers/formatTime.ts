export default function formatTime (timestamp: string): string {
  const date = new Date(timestamp)
  const now = new Date()
  const allMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
  const currentMonth = allMonths[date.getMonth()]
  const currentDay = date.getDate()
  const currentHour = date.getHours()
  const currentMinute = date.getMinutes()
  const diff = now.getDate() - date.getDate()

  let dateString = `${currentDay} ${currentMonth}`

  if (diff < 1) {
    dateString = `${currentHour}:${currentMinute}`
  }

  if (diff === 1) {
    dateString = 'YDA'
  }

  return dateString
}
