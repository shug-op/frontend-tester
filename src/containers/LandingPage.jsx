import React from 'react';
import {
    ChakraProvider,
    CSSReset,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
  } from '@chakra-ui/core';
  import theme from '@chakra-ui/theme';
  import { ColorModeSwitcher } from '../ColorModeSwitcher';
  import { Logo } from '../Logo';

function LandingPage() {
    return (
    <ChakraProvider theme={theme}>
        <CSSReset />
        <Box textAlign="center" fontSize="xl">
        <Grid
            minH="100vh"
            p={3}
            direction="column"
            align="center"
            justify="center"
        >
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text fontSize="6xl" color='aquamarine'>eris</Text>
            <Text>
                A <Code fontSize="xl">Frontend React App</Code> to simulate images shot during <Code fontSize="xl">drone flight</Code>.
            </Text>
            <Link
                color="teal.500"
                href="http://127.0.0.1:3000/root"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
            >
                Enter API Testing Root
            </Link>
            </VStack>
        </Grid>
        </Box>
    </ChakraProvider>
    )
}

export default LandingPage;