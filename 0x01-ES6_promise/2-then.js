/* using the the three handlers 'then, response, catch */
export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({
    status: 200,
    body: 'success',
  }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
