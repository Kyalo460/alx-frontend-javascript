export default function guardrail(mathFunction) {
  const queue = [];
  let value;

  try {
    value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push('Error: cannot divide by 0');
  }

  queue.push('Guardrail was processed');

  return queue;
}
