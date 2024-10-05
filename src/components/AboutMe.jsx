import { Heading, Text, Image, Box } from "@chakra-ui/react";
import { MyProfilePicture } from "../Logos";
import { FaUser } from "react-icons/fa"; // Importing the icon from react-icons
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutMe = () => {
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
      w={{ base: "80%", md: "80%" }}
      margin="auto"
      marginTop={10}
    >
      <Heading
        size="lg"
        color="blue.500"
        mt={4}
        mb={4}
        display="flex"
        alignItems="center"
      >
        <FaUser style={{ marginRight: "10px" }} /> {/* Adding the icon */}
        About Me
      </Heading>
      <Box border="1px solid yellow" margin="0 0 20px 0" width="100%" />

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-evenly"}
        alignItems={{ base: "center", md: "flex-start" }}
        flexWrap="wrap"
      >
        <Box flexShrink={0} flexBasis={{ base: "100%", md: "30%" }}>
          <Image
            display={"block"}
            margin={"auto"}
            src={MyProfilePicture}
            alt="My Profile Picture"
            boxSize={{ base: "170px", md: "200px", lg: "200px" }}
            objectFit="cover"
            borderRadius="full"
            mb={{ base: 4, md: 0 }}
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>

        <Box
          flexBasis={{ base: "100%", md: "70%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="rgba(0, 0, 0, 0.8)"
            ml={4}
          >
            I am a skilled front-end developer passionate about creating
            visually appealing, functional web applications. I deliver
            high-quality, efficient solutions through clean code, problem-solving,
            and collaboration, driving user engagement and usability.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
