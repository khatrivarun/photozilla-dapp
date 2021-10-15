import { useEffect, useState } from 'react';
import { ImageList } from './components/ImageList.component';
import { Image } from './models/image.model';
import { addImage, fetchImages } from './utils/smart_contract.util';
import { uploadImageAndGenerateHash } from './utils/upload_image_generate_hash.util';

const App = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchImages()
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
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
        setImages(data);
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
      {loading ? <h1>Loading</h1> : <ImageList images={images} />}
    </div>
  );
};

export default App;
