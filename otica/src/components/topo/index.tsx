import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';


import React from 'react'


function Topo() {
    return (
        <Flex alignItems="center"
        justify={'space-between'}
        margin={'20px'}
        >
        <Image src='/assets/logo.png' 
        alt='logo' 
        width={100} 
        height={50} 
        mr={4} 
        />

        <Flex alignItems="center">
            <Link mr={4}>Produto</Link>
            <Link mr={4}>Sobre</Link>
            <Link>Contato</Link>
        </Flex>

    </Flex>
    )
}

export default Topo;