import Head from "next/head";
import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

import {continents} from '../utils/continents'
import React from "react";
import { CallToAction } from "../components/CallToAction";

interface IContinent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface IHomeProps {
  continents: IContinent[];
}

export default function Home({continents}: IHomeProps) {
  return (
    <Flex   
      width="100%"
      flexDir="column"
      bg="gray.50"
      align="center"
    >
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "4xl"]}
        color="black.800"
        mt="52px"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <CallToAction continents={continents} />
    </Flex>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      continents: continents.map((continent) => ({
        id: continent.id,
        name: continent.name,
        call: continent.call,
        callImage: continent.callImage,
      })),
    },
  };
};