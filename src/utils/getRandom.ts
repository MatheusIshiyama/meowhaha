export function getRandom<T>(array: T[] | readonly T[]): T {
  const index: number = Math.floor(Math.random() * array.length);

  return array[index];
}
