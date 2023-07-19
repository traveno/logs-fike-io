export const convertDate = (published: string) => {
  const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
  ];
  const date = published.substring(0, 10);
  const [year, month, day] = date.split('-');
  return `${months[parseInt(month) - 1]} ${day}, ${year}`;
};