import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "335px"]}
      bgGradient="linear(to-t, #072E4B, #01162B)"
      bgPosition={["100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="1160"
        w="100%"
        mx="auto"
        backgroundImage="url('http://localhost:3000/assets/stars.png')"
      >
        <Box>
          <Heading color="white" fontWeight="500" fontSize={["xl", "4xl"]}>
            5 continentes,<br />infinitas possibilidades.
          </Heading>
          <Text color="white" mt="5" fontSize={["sm","xl"]} maxW={["100%", "550px"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box>
          <Image
            maxW="417px"
            display={['none', 'block']}
            src="/assets/airplane.png"
            alt="Airplane flying between some clouds."
            transform="translateY(48px)"
          />
        </Box>
      </Flex>
    </Flex>
  )
}