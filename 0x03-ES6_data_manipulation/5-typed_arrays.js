export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const view = new DataView(arrayBuffer);

  view.setInt8(position, value);

  return view;
}
