/* Return a Promise using this prototype function getResponseFromAPI() */
// 0-promise.js

export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Assuming response is fetched successfully
      const response = { data: 'Some data from API' };

      // Resolve the promise with the response
      resolve(response);

      // Reject the promise if there's an error
      // reject(new Error('Failed to fetch data from API'));
    }, 2000); // Simulating 2 seconds delay
  });
}
