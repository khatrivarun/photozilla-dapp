import { Spinner, Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ImageList } from './components/ImageList.component';
import { ImageUpload } from './components/ImageUpload.component';
import { Image } from './models/image.model';
import { fetchImages } from './utils/smart_contract.util';

const App = () => {
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

  const refreshImages = async () => {
    const data = await fetchImages();
    setImages(data);
  };

  return (
    <div>
      <h1>Hello From React!!</h1>
      <ImageUpload refreshImages={refreshImages} />
      <Center>
        {loading ? <Spinner size='xl' /> : <ImageList images={images} />}
      </Center>
    </div>
  );
};

export default App;
