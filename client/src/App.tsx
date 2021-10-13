import { useEffect, useState } from 'react';
import { addImage, fetchImages } from './utils/smart_contract.util';
import { uploadImageAndGenerateHash } from './utils/upload_image_generate_hash.util';

const App = () => {
  const [imageFile, setImageFile] = useState<File>();

  useEffect(() => {
    fetchImages()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onFileUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImage = event.target.files[0];
      setImageFile(selectedImage);
    }
  };

  const onImageUpload = async () => {
    try {
      if (imageFile) {
        const hash = await uploadImageAndGenerateHash(imageFile);
        await addImage(hash);
        const data = await fetchImages();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Hello From React!!</h1>
      <input
        type='file'
        name='image'
        id='image'
        onChange={onFileUploadChange}
      />
      <button onClick={onImageUpload}>Upload</button>
    </div>
  );
};

export default App;
