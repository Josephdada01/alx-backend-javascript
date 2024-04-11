import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userData = await signUpUser(firstName, lastName);
    const fileData = await uploadPhoto(fileName);
    
    // Constructing objects with status and value
    const userDataObject = { status: 'fulfilled', value: userData };
    const fileDataObject = { status: 'fulfilled', value: fileData };

    // Returning the array containing the objects
    return [userDataObject, fileDataObject];
  } catch (error) {
    // Error handling for both operations
    const userDataErrorObject = { status: 'rejected', value: error.toString() };
    const fileDataErrorObject = { status: 'rejected', value: error.toString() };
    
    // Returning the array containing the error objects
    return [userDataErrorObject, fileDataErrorObject];
  }
}

