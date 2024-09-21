import { Heading, Text, Image, Box, keyframes } from "@chakra-ui/react";
import { MyProfilePicture } from "../Logos";
import { FaUser } from "react-icons/fa"; // Importing the icon from react-icons

const popUp = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const AboutMe = () => {
  return (
    <>
      <Box
        boxShadow="md"
        bg="white"
        p={4}
        rounded="lg"
        w={{ base: "80%", md: "80%" }} // Responsive width for mobile and desktop
        margin="auto"
        marginTop={10}
        animation={`${popUp} 1.6s ease-out`}>
        <Heading
          size="lg"
          color="blue.500"
          mt={4}
          mb={4}
          display="flex"
          alignItems="center">
          <FaUser style={{ marginRight: "10px" }} /> {/* Adding the icon */}
          About Me
        </Heading>
        <Box border="1px solid yellow" margin="0 0 20px 0" width="100%" />

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
          justifyContent={"space-evenly"}
          alignItems={{ base: "center", md: "flex-start" }} // Align to the start on larger screens
          flexWrap="wrap">
          <Box flexShrink={0} flexBasis={{ base: "100%", md: "30%" }} >
            {" "}
          
            <Image
  display={"block"}
  margin={"auto"}
  src={MyProfilePicture}
  alt="My Profile Picture"
  boxSize={{ base: "170px", md: "200px", lg: "200px" }} // Responsive image size
  objectFit="cover"
  borderRadius="full"
  mb={{ base: 4, md: 0 }} // Adds margin on mobile screens
  transition="transform 0.3s ease, box-shadow 0.3s ease" // Smooth transition for scale and shadow
  _hover={{
    transform: "scale(1.05)", // Slight scaling on hover
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Add a subtle shadow on hover
  }}
/>

          </Box>

          <Box
            flexBasis={{ base: "100%", md: "70%" }}
            textAlign={{ base: "center", md: "left" }}>
            {" "}
            {/* Responsive text container */}
            <Text 
            fontSize={{ base: "lg", md: "xl" }}
            color='rgba(0, 0, 0, 0.8)'
            ml={4}
            >
              I am a highly skilled and innovative front-end developer with a
              passion for crafting exceptional user experiences. With a keen
              focus on aesthetics and functionality, I transform ideas into
              visually stunning and engaging web applications. Dedicated to
              writing clean, efficient code, I leverage strong problem-solving
              skills to deliver high-quality solutions. Collaborating seamlessly
              with cross-functional teams, I drive projects forward with
              creativity, attention to detail, and a relentless pursuit of
              perfection, ultimately enhancing usability and driving user
              engagement.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
