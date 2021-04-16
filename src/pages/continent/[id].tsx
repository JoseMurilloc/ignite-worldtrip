import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { continents } from "../../utils/continents";
import { Header } from "../../components/Header";
import { Box, Flex, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import CityItem from "../../components/CityItem";

export interface ContinentProps {
  continent: {
    name: string;
    summary: string;
    call: string;
    about: string;
    url: string;
    bannerImage: string;
    cities100: number;
    countries: number;
    languages: number;
    topCities: number;
    cities: {
      name: string;
      country: string;
      countryCode: string;
      image: string;
      code: string;
    }[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Flex
        width="100%"
        flexDir="column"
        bg="gray.50"
        align="center"
      >
        <Header />
        <Flex
          backgroundImage={`url(http://localhost:3000/${continent?.bannerImage})`}
          w="100%"
          h={400}
          px={110}
          py={45}
          align="flex-end"
          backgroundSize="cover"
        >
          <Heading color="white" >{continent?.name}</Heading>       
        </Flex>
        <Flex
          align="center"
          mt="80px"
        >
          <Flex width="500px" mr="70px" >
            <Text
              color="#47585B"
              line-height="36px"
            >
              {continent?.about}
            </Text>
          </Flex>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Flex as="section" flexDirection="column" justify="center" align="center">
              <Text 
                fontWeight={600} fontSize="48px" lineHeight="72px" color="#FFBA08"
              >
                {continent?.countries}
              </Text> 
              <Text color="#47585B">
                países
               </Text>
            </Flex>
            <Flex as="section" flexDirection="column" justify="center" align="center">
              <Text 
                fontWeight={600} fontSize="48px" lineHeight="72px" color="#FFBA08"
              >
                {continent?.languages}
              </Text> 
              <Text color="#47585B">
                línguas
               </Text>
            </Flex>
            <Flex as="section" flexDirection="column" justify="center" align="center">
              <Text 
                fontWeight={600} fontSize="48px" lineHeight="72px" color="#FFBA08"
              >
                {continent?.cities100}
              </Text> 
              <Text color="#47585B">
                cidades +100
               </Text>
            </Flex>
          </Grid>

        </Flex>

       <Flex width="1000px" mt="80px" mb="40px">
        <Heading color="#47585B">Cidades +100</Heading>
       </Flex>
        <Grid
          templateColumns="repeat(4, 2fr)"
          gap={6}
          width="1000px"
          mb="30px"
        >
         {continent?.cities.map(city => (
          <CityItem city={city} />
         ))}
              
        </Grid>
     </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const continent = continents.find((continent) => continent.id === id);

  return {
    props: {
      continent,
    },
  };
};
