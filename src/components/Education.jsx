import { Box, Text, Heading, Image, Flex ,keyframes} from "@chakra-ui/react";
import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa"; // Importing an education icon
import { KumaonLogo, Masailogo } from "../Logos";


const popUp = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;
const Education = () => {
  return (
    <Box boxShadow="md" bg="white" p={4} rounded="lg" w="80%" margin="auto" marginTop={10}  animation={`${popUp} 1.6s ease-out`}>
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
