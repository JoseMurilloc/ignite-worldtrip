import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react';
import { CircleFlag } from 'react-circle-flags';

type CityItemProps = {
  city: {
    name: string;
    country: string;
    countryCode: string;
    image: string;
    code: string;
  };
}

export default function CityItem ({ city }: CityItemProps) {
  return (
    <GridItem
      width="226px"
      height="249px"
      borderRadius={4}
      borderWidth={1}
      borderColor="rgba(255, 186, 8, 0.5);"
    >
      <Box>
        <Image width="226px" height="153px" src={city.image} />
      </Box>
      <Flex
        px="24px"
        py="18px"
        justify="space-between"
        align="center"
      >
        <Box>
          <Text
            fontSize="18px"
            lineHeight="22px"
            fontWeight="600"
            color="#47585B"
          >{city.name}</Text>
          <Text
            fontSize="14px"
            fontWeight="500"
            color="#999"
            mt="12px"
          >{city.country}</Text>
        </Box>
        <Box>
          <CircleFlag countryCode={city.code} height="40" width="40" />
        </Box>
      </Flex>

    </GridItem>
  );
}
