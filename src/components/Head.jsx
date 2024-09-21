import { Box, Text, Link, Flex, Heading, keyframes } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Define the keyframes for the wave effect
const wave = keyframes`
  0% { width: 30%; }
  50% { width:0%}
  100% { width: 70%; }
`;

const popUp = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const Head = () => {
  return (
    <>
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
      
      >
        <Heading
          fontSize={{ base: "28px", md: "36px", lg: "48px" }}
          mb={4}
          marginTop={2}
          animation={`${popUp} 1.2s ease-out`}
        >
          Ashish Danu
        </Heading>
        <Text
          fontSize={{ base: "18px", md: "28px", lg: "36px" }}
          mb={2}
          animation={`${popUp} 1.4s ease-out`}
        >
        Front-End Developer
        </Text>
        <Box mt={2}>
          <Flex
            justify="center"
            align="center"
            gap={4}
            fontSize={{ base: "16px", md: "24px", lg: "32px" }}
            animation={`${popUp} 1.6s ease-out`}
          >
           <Link href={`mailto:ashishdanu1100@gmail.com`} textDecoration="none">
  <Text color={'orange'}>ashishdanu1100@gmail.com</Text>
</Link>
<Link href={`tel:9690959095`} textDecoration="none">
  <Text color={'orange'}>9690959095</Text>
</Link>
          </Flex>
        </Box>
        <Flex mt={6} gap={6} justify="center" animation={`${popUp} 1.8s ease-out`}>
          <Link href="https://github.com/Ashishdanu" isExternal>
            <FaGithub size="32px" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ashish-danu-3122b0303/"
            isExternal
          >
            <FaLinkedin size="32px" />
          </Link>
        </Flex>
        <Box
        as="hr"
        animation={`${popUp} 1.6s ease-out`}
        sx={{
          color: 'blue',
          backgroundColor: 'orange',
          height: '10px',
          width: '90%',
          marginTop: '7px',
          transition: 'width 0.5s ease',
          borderBlockColor:'red' ,
        }}
        _hover={{
          animation: `${wave} 1.5s ease forwards`,
        }}
      />
      </Box>


    </>
  );
};

export default Head;
