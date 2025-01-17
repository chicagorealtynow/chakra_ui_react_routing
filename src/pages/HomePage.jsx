import React from 'react';
    import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react';
    import Navbar from '../components/Navbar';
    
    function HomePage() {
      return (
        <Box>
          <Navbar />
          <Box
            minH="55vh"
            bgImage="url('https://placekitten.com/1920/1080')"
            bgSize="cover"
            bgPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            color="white"
          >
            <VStack spacing={4}>
              <Heading as="h1" size="2xl">Welcome to Our Site</Heading>
              <Text fontSize="xl">This is the hero section with a background image.</Text>
            </VStack>
          </Box>
          <Box id="services" py={8} textAlign="center">
            <Heading as="h2" size="xl" mb={4}>Our Services</Heading>
            <Text fontSize="lg">Here are the services we provide.</Text>
          </Box>
          <Box id="contact" py={8} textAlign="center">
            <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
            <Text fontSize="lg">Get in touch with us.</Text>
          </Box>
        </Box>
      );
    }
    
    export default HomePage;
