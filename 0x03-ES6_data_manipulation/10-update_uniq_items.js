export default function updateUniqueItems(map) {
  try {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  } catch (error) {
    throw Error('Cannot process');
  }

  return map;
}
