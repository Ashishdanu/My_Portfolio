import { Box, Flex, Heading, Icon, Text, SimpleGrid } from '@chakra-ui/react';
import { FaReact, FaGithub, FaCss3Alt, FaHtml5, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiChakraui, SiJavascript } from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const TechStack = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const popUpVariant = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.4, ease: 'easeOut' } },
  };

  return (
    <Box
      as={motion.div}
      ref={ref}
      variants={popUpVariant}
      initial="hidden"
      animate={controls}
      boxShadow="md"
      bg="white"
      p={4}
      rounded="lg"
      w="80%"
      margin="auto"
      marginTop={10}
    >
      <Flex align="center" mb={4}>
        <Icon as={FaReact} boxSize={6} color="teal.500" mr={2} />
        <Heading size="lg">Tech Stack</Heading>
      </Flex>
      <Box border="1px solid yellow" margin="0 0 20px 0" width="100%" />
      <SimpleGrid columns={[2, 3, 4]} spacing={6}>
        {/* Each icon and text with hover effect */}
        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={FaReact} boxSize={6} color="blue.500" />
          <Text color="rgba(0, 0, 0, 0.8)">React JS</Text>
        </Flex>

        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={SiTailwindcss} boxSize={6} color="cyan.500" />
          <Text color="rgba(0, 0, 0, 0.8)">Tailwind CSS</Text>
        </Flex>

        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={SiJavascript} boxSize={6} color="yellow.500" />
          <Text color="rgba(0, 0, 0, 0.8)">JavaScript</Text>
        </Flex>

        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={SiChakraui} boxSize={6} color="teal.500" />
          <Text color="rgba(0, 0, 0, 0.8)">Chakra UI</Text>
        </Flex>

        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={FaHtml5} boxSize={6} color="orange.500" />
          <Text color="rgba(0, 0, 0, 0.8)">HTML5</Text>
        </Flex>

        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={FaCss3Alt} boxSize={6} color="blue.500" />
          <Text color="rgba(0, 0, 0, 0.8)">CSS3</Text>
        </Flex>

        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={FaGithub} boxSize={6} color="black" />
          <Text color="rgba(0, 0, 0, 0.8)">GitHub</Text>
        </Flex>

        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={SiFirebase} boxSize={6} color="orange.500" />
          <Text color="rgba(0, 0, 0, 0.8)">Firebase</Text>
        </Flex>

        <Flex align="center" gap={2} _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}>
          <Icon as={FaDatabase} boxSize={6} color="green.500" />
          <Text color="rgba(0, 0, 0, 0.8)">SQL</Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default TechStack;
