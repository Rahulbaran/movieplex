export default function modifyRuntime(runtime) {
  let hours = Math.floor(runtime / 60);
  let minutes = runtime % 60;

  hours = hours > 1 ? `${hours} hours` : `${hours} hour`;
  minutes = minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;

  return `${hours} ${minutes}`;
}
