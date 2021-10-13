export const uploadImageAndGenerateHash = async (
  imageFile: File
): Promise<string> => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await fetch('/v1/api/image', {
    body: formData,
    method: 'POST',
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    throw new Error(responseJson.error);
  }

  return responseJson.hash;
};
