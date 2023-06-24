export function modifyTitle(pageTitle) {
  let title = pageTitle.replaceAll("_", " ");
  title = title
    .split(" ")
    .map(str => str[0].toUpperCase() + str.slice(1))
    .join(" ");
    
  return title;
}
