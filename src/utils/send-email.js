export function sendEmail(data) {
  // TODO: send email
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => {
        return res.json();
    })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        throw err;
    });
}