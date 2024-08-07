import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {

  try{
    let photo = await uploadPhoto();
    let user = await createUser();

    const object = {
      photo,
      user,
    };

    return object;

  } catch(error) {
    return {
      photo: null,
      user: null,
    }
  }
}
