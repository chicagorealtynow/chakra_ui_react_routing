import React from 'react';
    import { Box, Flex, HStack, Link } from '@chakra-ui/react';
    import { Link as RouterLink } from 'react-router-dom';
    
    function Navbar() {
      return (
        <Box bg="gray.100" px={4} py={2}>
          <Flex alignItems="center" justifyContent="space-between">
            <HStack spacing={8}>
              <Link as={RouterLink} to="/" fontWeight="bold">Home</Link>
              <Link as={RouterLink} to="/about">About</Link>
              <Link href="#services">Services</Link>
              <Link as={RouterLink} to="/testimonials">Testimonials</Link>
              <Link href="#contact">Contact</Link>
            </HStack>
          </Flex>
        </Box>
      );
    }
    
    export default Navbar;
