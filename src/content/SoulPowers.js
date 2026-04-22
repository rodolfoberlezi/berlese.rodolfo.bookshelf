import React from 'react'
import { Center, Grid, GridItem, Stack } from "@chakra-ui/react"
import TranslatedHeading from "../components/TranslatedHeading"
import TranslatedLabel from "../components/TranslatedLabel"


const SoulPowers = () => {
    const powers = [
        { name: 'power.name.power', description: 'power.text.power' },
        { name: 'power.name.controller', description: 'power.text.controller' },
        { name: 'power.name.creator', description: 'power.text.creator' },
    ]

    return (
        <Stack id='soul-powers' width={['100vw', '80vw']} minHeight={410} gap={10} mt={5} py={2} mx="auto" >
            <Center p={4}>
                <Stack direction={["column", "row"]} gap={10}>
                    <TranslatedHeading props={{ fontSize: 42 }} text={'power.explore.title'} />
                    <TranslatedLabel props={{ fontSize: 24 }} text={'power.explore.countries'} />
                </Stack>
            </Center >
            <Grid templateColumns={{ lg: 'repeat(3, 1fr)' }} fontSize={24}>
                {powers.map((power) => (
                    <GridItem key={power.name} m={5} textAlign="center">
                        <Center mt={2}>
                            <strong>
                                <TranslatedLabel props={{ fontSize: 26 }} text={power.name} />
                            </strong>
                        </Center>
                        <Center>
                            <TranslatedLabel text={power.description} />
                        </Center>
                    </GridItem>
                ))}
            </Grid>
            <Center>
                <TranslatedHeading props={{ fontSize: 24 }} text={'power.explore.journeys'} />
            </Center>
        </Stack >
    )
}

export default SoulPowers
