import React from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";

import { ContentContainer } from "../ContentContainer";
import { Slider } from "./Slider";

interface IContinent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface ICallToActionProps {
  continents: IContinent[];
}

export const CallToAction = ({ continents }: ICallToActionProps) => {
  return (
    <ContentContainer>
      <Slider continents={continents} />
    </ContentContainer>
  );
};
