// components/Footer.js
import { Box, Text, Icon, Flex, keyframes } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const wave = keyframes`
  0% { width: 80%; }
  50% { width:30%}
  100% { width: 100%; }
`;

const Footer = () => {
  return (
    <Box 
      bg="black"
      color="white"
      p={{ base: 4, md: 6, lg: 8 }}
      fontSize={"xl"}
      margin={"auto"}
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gap={4} // Adjusted gap for better spacing
    >
      <Box
        as="hr"
        sx={{
          color: 'blue',
          backgroundColor: 'orange',
          height: '6px',
          width: '100%',
          marginTop: '7px',
          transition: 'width 0.5s ease',
          borderBlockColor: 'red',
        }}
        _hover={{
          animation: `${wave} 1.5s ease forwards`,
        }}
      />
      <Text>© 2024 Ashish Danu | Nainital, Uttarakhand</Text>

      {/* Social Media Section */}
      <Flex gap={4}>
        {/* Add your social media links here */}
        <a href="https://www.instagram.com/_ashish.danu/" target="_blank" rel="noopener noreferrer"> 
          <Icon as={FaInstagram} boxSize={6} _hover={{ color: "pink.500" }} />
        </a>
        <a href="https://x.com/_Ashish_Danu" target="_blank" rel="noopener noreferrer">
          <Icon as={FaTwitter} boxSize={6} _hover={{ color: "blue.400" }} />
        </a>
        <a href="https://www.facebook.com/ashish.danu.14/" target="_blank" rel="noopener noreferrer"> {/* Facebook Link */}
          <Icon as={FaFacebook} boxSize={6} _hover={{ color: "blue.600" }} />
        </a>
      </Flex>

      {/* Additional Footer Elements */}
      <Flex flexDirection="column" alignItems="center" gap={2}>
        <Text fontSize="sm">Designed & Developed by Ashish Danu</Text>
        <Text fontSize="sm">Feel free to connect or explore more on GitHub</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
