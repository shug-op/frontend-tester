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
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    IconButton,
  } from '@chakra-ui/core';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaInfoCircle } from 'react-icons/fa';
import GETTab from './GETTab';
import POSTTab from './POSTTab';
import PATCHTab from './PATCHTab';
import PUTTab from './PUTTab';
import DELETETab from './DELETETab';

function LandingPage() {
    function printSmth() {
        console.log('hi');
    }

    return (
    <ChakraProvider>
        <CSSReset />
        <Box textAlign="center" fontSize="xl">
        <Grid
            p={3}
            direction="column"
            align="center"
            justify="center"
        >
            <span justifySelf="flex-end">
                <IconButton
                    size="md"
                    fontSize="lg"
                    aria-label={`Close`}
                    variant="ghost"
                    color="current"
                    marginLeft="2"
                    onClick={printSmth}
                    icon={<FaInfoCircle/>}
                />
                <ColorModeSwitcher justifySelf="flex-start" />
            </span>
            <Tabs variant="soft-rounded" variantColor="green">
                <TabList>
                    <Tab>GET</Tab>
                    <Tab>POST</Tab>
                    <Tab>PATCH</Tab>
                    <Tab>PUT</Tab>
                    <Tab>DELETE</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <GETTab />
                    </TabPanel>
                    <TabPanel>
                        <POSTTab />
                    </TabPanel>
                    <TabPanel>
                        <PATCHTab />
                    </TabPanel>
                    <TabPanel>
                        <PUTTab />
                    </TabPanel>
                    <TabPanel>
                        <DELETETab />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Grid>
        </Box>
      </ChakraProvider>
    )
}

export default LandingPage;