import { useState } from 'react';
import { uploadImageAndGenerateHash } from './utils/upload_image_generate_hash.util';

const App = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageFile, setImageFile] = useState<File>();

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

        setImageUrl(`https://gateway.pinata.cloud/ipfs/${hash}`);
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
      {imageUrl.length > 0 && <img alt='IPFS File' src={imageUrl} />}
    </div>
  );
};

export default App;
