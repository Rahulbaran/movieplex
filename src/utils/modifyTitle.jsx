export function modifyTitle(title) {
  let t = title.replace("_", " ");
  t = t[0].toUpperCase() + t.slice(1);
  return t;
}
