import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <Box paddingY={100} bgColor='teal' color='white'>
      <Flex direction='column' align='center' justify='center'>
        <Heading>PhotoZilla</Heading>
        <h1>React + Solidity + IPFS Public Image Storage</h1>
      </Flex>
    </Box>
  );
};
