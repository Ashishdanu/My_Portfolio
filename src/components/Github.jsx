import { Box, Image, Text } from "@chakra-ui/react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Github = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const slideInVariant = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and hidden
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  return (
    <Box 
      as={motion.div}
      ref={ref}
      variants={slideInVariant}
      initial="hidden"
      animate={controls}
      textAlign="center" 
      mt={{ base: "10px", md: "20px" }} // Different margin for mobile (base) and desktop (md)
      px={{ base: "10px", md: "20px" }} // Padding for mobile and larger screens
    >
      <Text 
        fontSize={{ base: "lg", md: "2xl" }} // Font size for mobile and desktop
        fontWeight="bold" 
        color="blue.500"
      >
        My Github Stats
      </Text>

      {/* GitHub Stats Card */}
      <Image
        src={`https://github-readme-stats.vercel.app/api?username=Ashishdanu&show_icons=true&theme=radical`}
        alt="GitHub Stats"
        mt={{ base: "10px", md: "20px" }} // Margin for mobile and larger screens
        borderRadius="10px"
        width={{ base: "100%", md: "80%", lg: "60%" }} // Full width on mobile, less on larger screens
        margin={'auto'}
      />

      {/* Most Used Languages */}
      <Image
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Ashishdanu&layout=compact&theme=radical`}
        alt="Top Languages"
        mt={{ base: "10px", md: "20px" }} // Margin for mobile and larger screens
        borderRadius="10px"
        width={{ base: "100%", md: "80%", lg: "60%" }} // Full width on mobile, less on larger screens
        margin={'auto'}
      />
    </Box>
  );
};

export default Github;
