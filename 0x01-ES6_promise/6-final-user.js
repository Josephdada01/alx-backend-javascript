import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // calling the imported function
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  // waiting for the promise to settle
  return Promise.all([promise1, promise2])
    .then(([response1, response2]) => [
      { status: 'fulfilled', value: response1 },
      { status: 'fulfilled', value: response2 },
    ])
    .catch((error) => [
      { status: 'rejected', value: error },
    ]);
}
