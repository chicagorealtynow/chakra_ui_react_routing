import React from 'react';
    import { Box, Heading, Text } from '@chakra-ui/react';
    import Navbar from '../components/Navbar';
    
    function TestimonialsPage() {
      return (
        <Box>
          <Navbar />
          <Box py={8} textAlign="center">
            <Heading as="h2" size="2xl" mb={4}>Testimonials</Heading>
            <Text fontSize="lg">See what our clients are saying.</Text>
          </Box>
        </Box>
      );
    }
    
    export default TestimonialsPage;
