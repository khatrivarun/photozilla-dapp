import { Flex, Text, Image, Box } from '@chakra-ui/react';
import React from 'react';
import { Image as ImageModel } from '../models/image.model';

export interface ImageDisplayProps {
  image: ImageModel;
}

export const ImageDisplay: React.FunctionComponent<ImageDisplayProps> = ({
  image,
}) => {
  return (
    <Box
      boxShadow='0 4px 8px 0 rgba(0,0,0,0.5)'
      borderRadius='lg'
      m={5}
      padding={3}
      w={{ base: '95%', lg: '60%', xl: '40%' }}
    >
      <Flex direction='column' align='center' justify='center' margin={3}>
        <Box m={3}>
          <Text
            fontSize={{
              base: 'xx-small',
              md: 'sm',
            }}
            fontWeight='bold'
          >
            {image.owner} posted
          </Text>
        </Box>
        <Image
          src={`https://gateway.pinata.cloud/ipfs/${image.imgHash}`}
          alt={`${image.owner}'s Image'`}
        />
      </Flex>
    </Box>
  );
};
