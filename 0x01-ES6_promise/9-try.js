export default function guardrail(mathFunction) {
  const queue = [];
  let value;

  try {
    value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(error.message);
  }

  queue.push('Guardrail was processed');

  return queue;
}
