import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Image } from '../models/image.model';
import { ImageDisplay } from './ImageDisplay.component';

export interface ImageListProps {
  images: Image[];
}

export const ImageList: React.FunctionComponent<ImageListProps> = ({
  images,
}) => {
  return (
    <Flex direction='column' align='center' justify='center'>
      {images.map((image) => (
        <ImageDisplay key={Math.random().toString()} image={image} />
      ))}
    </Flex>
  );
};
