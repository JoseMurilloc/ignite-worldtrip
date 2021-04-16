import { Flex, Image } from "@chakra-ui/react"
import React from "react"
import { Link } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      height={100}
    >
      <Link href="/">
        <Image src="/assets/logo.png" alt="Logo"/>
      </Link>
    </Flex>
  )
}