export default function modifyDate(dateString) {
  return new Date(dateString).toDateString().slice(4);
}
