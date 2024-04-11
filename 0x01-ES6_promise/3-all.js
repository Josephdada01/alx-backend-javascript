/* use the prototype below to collectively resolve all promises
 * and log body firstName lastName to the console.
 */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
