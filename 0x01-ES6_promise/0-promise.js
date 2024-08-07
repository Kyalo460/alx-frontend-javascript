export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('foo');
      } else {
        reject(new Error('bar'));
      }
    }, 300);
  });
}
