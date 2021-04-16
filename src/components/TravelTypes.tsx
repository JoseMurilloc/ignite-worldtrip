import { 
  Flex,
  Box,
  Image,
  Heading,
  Text
} from "@chakra-ui/react";
import React from "react";

export function TravelTypes() {
  return (
    <Flex
      flexDir="column"
      _after={{
        content: `""`,
        position: "block",
        width: "100px",
        borderBottomWidth: "4px",
        borderBottomColor: "black.800",
        opacity: "0.6",
        m: "auto",
        mt: "80px",
      }}
    >
      <Flex
        minWidth={950}
        justify="space-between"
        mt="90"
        align="center"
      >
        <Flex as="section" align="center" flexDir="column">
          <Image src="assets/cocktail.png" />
          <Text fontWeight="600" fontSize={["md"]} mt="24px" color="black.800">
            vida noturna
          </Text>
        </Flex>

        <Flex as="section" align="center" flexDir="column">
          <Image src="assets/surf.png" />
          <Text fontWeight="600" fontSize={["md"]} mt="24px" color="black.800">
            praia
          </Text>
        </Flex>

        <Flex as="section" align="center" flexDir="column">
          <Image src="assets/building.png" />
          <Text fontWeight="600" fontSize={["md"]} mt="24px" color="black.800">
            moderno
          </Text>
        </Flex>

        <Flex as="section" align="center" flexDir="column">
          <Image src="assets/museum.png" />
          <Text fontWeight="600" fontSize={["md"]} mt="24px" color="black.800">
            clássico
          </Text>
        </Flex>

        <Flex as="section" align="center" flexDir="column">
          <Image src="assets/earth.png" />
          <Text fontWeight="600" fontSize={["md"]} mt="24px" color="black.800">
            e mais...
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}