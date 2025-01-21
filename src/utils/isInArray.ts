export const isInArray = <T, Element extends T>(
  element: T,
  array: readonly Element[],
): element is Element => {
  const arrayT: readonly T[] = array;
  return arrayT.includes(element);
};
