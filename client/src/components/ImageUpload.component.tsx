import { Button, Flex, Box, Image } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { addImage } from '../utils/smart_contract.util';
import { uploadImageAndGenerateHash } from '../utils/upload_image_generate_hash.util';

export interface ImageUploadProps {
  refreshImages: () => Promise<void>;
}

export const ImageUpload: React.FunctionComponent<ImageUploadProps> = ({
  refreshImages,
}) => {
  const [imageFile, setImageFile] = useState<File>();
  const [localImageUrl, setLocalImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const inputFile = useRef<HTMLInputElement>(null);

  const onFileUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImage = event.target.files[0];
      setImageFile(selectedImage);
      setLocalImageUrl(URL.createObjectURL(selectedImage));
    }
  };

  const onImageUpload = async () => {
    if (localImageUrl.length > 0) {
      setLoading(true);
      try {
        const hash = await uploadImageAndGenerateHash(imageFile!);
        await addImage(hash);
        await refreshImages();

        setLocalImageUrl('');
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <Flex direction='column' align='center' justify='center' margin={3}>
      <input
        type='file'
        ref={inputFile}
        onChange={onFileUploadChange}
        style={{ display: 'none' }}
      ></input>
      {localImageUrl.length > 0 && (
        <Box boxSize={{ base: 'xs', lg: 'sm' }} padding={5}>
          <Image src={localImageUrl} alt='Uploaded Image' />
        </Box>
      )}
      <Flex>
        <Button m={3} onClick={() => inputFile.current?.click()}>
          Select Image
        </Button>
        <Button
          m={3}
          onClick={onImageUpload}
          isLoading={loading}
          loadingText='Uploading'
        >
          Upload Image
        </Button>
      </Flex>
    </Flex>
  );
};
