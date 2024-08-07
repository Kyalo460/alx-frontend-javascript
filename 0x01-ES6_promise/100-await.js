import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo = await uploadPhoto();
  let user = await createUser();

  if (!photo) {
    photo = null;
  }
  if (!user) {
    user = null;
  }

  const object = {
    photo,
    user,
  };

  return object;
}
