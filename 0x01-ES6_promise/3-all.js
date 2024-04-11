/* use the prototype below to collectively resolve all promises
 * and log body firstName lastName to the console.
 */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
