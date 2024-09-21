import { Box, Text, Flex, Heading, Link, Icon , keyframes} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt ,FaUser } from 'react-icons/fa';

const popUp = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const Projects = () => {
  return (
    <Box boxShadow="md" bg="white" p={4} rounded="lg" w="80%" margin="auto" marginTop={10} marginBottom={6}   animation={`${popUp} 1.4s ease-out`}>
      <Flex align="center" mb={4}>
        <Icon as={FaUser} boxSize={6} color="teal.500" mr={2} />
        <Heading size="lg">Projects</Heading>
      </Flex>
     

      <Box border="1px solid yellow" margin="0 0 20px 0" width="100%" />

      {/* Project 1 */}
      <Box mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Time Trail
        </Heading>
        <Box border="1px solid red" margin="0 0 20px 0" width="40%" />
        <Text fontSize="lg" mb={2} color={'blueviolet'}>
          JavaScript | HTML5 | CSS3 | Responsive Web Design | Git
        </Text>
        <Text  color='rgba(0, 0, 0, 0.8)'>
          Developed and optimized pages for usability, implemented user authentication, created dynamic menu interactions, and ensured responsive design.
        </Text>
        <Flex mt={2} gap={4}>
          <Link href="github.com/SURYOSIKHA/Article-Architects_010" isExternal>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://66a7b0d403f210227e7fe5b8--hilarious-lamington-6e806d.netlify.app/" isExternal>
            <Icon as={FaExternalLinkAlt} boxSize={6} />
          </Link>
        </Flex>
      </Box>

      {/* Project 2  poxel pole main project*/}
      <Box>
        <Heading as="h3" size="md" mb={2}>
          Pixel Pole Vault 021
        </Heading>
        <Box border="1px solid red" margin="0 0 20px 0" width="40%" />
        <Text fontSize="lg" mb={2} color={'blueviolet'}>
          HTML5 | CSS3 | JavaScript | JSON | GitHub | Responsive Web Design
        </Text>
    
        <Text  color='rgba(0, 0, 0, 0.8)'>
          Contributed to VisionScript programming language development, integrated an editor, and enhanced backend functionality for performance and responsiveness.
        </Text>
        <Flex mt={2} gap={4}>
  <Link href="https://github.com/Anikesh-Sharma/Pixel-pole-vault_021" isExternal rel="noopener noreferrer" target='_blank'>
    <Icon as={FaGithub} boxSize={6} />
  </Link>
  <Link href="https://66d5fa2961a09e2889640e53--dazzling-biscochitos-f2f44c.netlify.app/" isExternal target='_blank' rel="noopener noreferrer">
    <Icon as={FaExternalLinkAlt} boxSize={6} />
  </Link>
</Flex>
      </Box>
    </Box>
  );
};

export default Projects;
