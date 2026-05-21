export function getTsCount(substr: string, str: string): number {
  let position = 0;
  let count = 0;
  while ((position = str.indexOf(substr, position)) >= 0) {
    count++;
    position++;
  }

  return count;
}
