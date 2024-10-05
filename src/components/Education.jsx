import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";
import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa"; // Importing an education icon
import { KumaonLogo, Masailogo } from "../Logos";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Education = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 }); // Adjust threshold as needed

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const popUpVariant = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.6, ease: "easeOut" } },
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
        <FaGraduationCap size="32px" color="teal" style={{ marginRight: "10px" }} />
        <Heading as="h2" size="lg">
          Education
        </Heading>
      </Flex>

      <Box border="1px solid yellow" margin="0 0 20px 0" width="100%" />

      {/* Masai School */}
      <Box mb={6}>
        <Flex align="center" gap={4}>
          <Image src={Masailogo} alt="Masai School Logo" boxSize="50px" />
          <Box>
            <Text fontWeight="bold" fontSize="xl">
              Masai School, Bangalore
            </Text>
            <Flex alignItems="center" fontSize="md" color="gray.600">
              <FaCalendarAlt />
              <Text ml={2}>March 2024 - Present</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Kumaon University */}
      <Box mb={6}>
        <Flex align="center" gap={4}>
          <Image src={KumaonLogo} alt="Kumaon University Logo" boxSize="50px" />
          <Box>
            <Text fontWeight="bold" fontSize="xl">
              Graduated from Kumaon University
            </Text>
            <Flex alignItems="center" fontSize="md" color="gray.600">
              <FaCalendarAlt />
              <Text ml={2}>July 2020 - Aug 2023</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Education;
