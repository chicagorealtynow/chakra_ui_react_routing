import React from 'react';
    import { Box, Heading, Text } from '@chakra-ui/react';
    import Navbar from '../components/Navbar';
    
    function AboutPage() {
      return (
        <Box>
          <Navbar />
          <Box py={8} textAlign="center">
            <Heading as="h2" size="2xl" mb={4}>About Us</Heading>
            <Text fontSize="lg">Learn more about our company.</Text>
          </Box>
        </Box>
      );
    }
    
    export default AboutPage;
