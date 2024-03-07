import { Box, Heading, Text } from '@chakra-ui/react';

import React from 'react'

function SecaoCapa() {
  return (
    <Box as="section"
     position="relative"
      maxWidth={'1200px'} 
      marginLeft={'auto'}
      marginRight={'auto'}
      >
    {/* Div que contém a imagem de fundo e o texto */}
    <Box
        backgroundImage="assets/capa.png"  // URL da sua imagem de fundo
        backgroundSize="cover"
        backgroundPosition="center"
        width="100%"
        height="300px" // ajuste a altura conforme necessário
        position="relative"
        zIndex={1}
    >
        {/* Div que contém o texto */}
        <Box position="absolute" top="50%" left="30%" transform="translate(-50%, -50%)" textAlign="center">
            <Text color="white" fontSize="xl">Preços baixos em</Text> {/* Texto "Preços baixos em" */}
            <Heading as="h1" marginLeft={'5px'} size="lg" color="white">Óculos de grau e de sol</Heading> {/* Título "Óculos de grau e de sol" */}
            <Text color="white" fontSize="xl">Você só encontra aqui</Text> {/* Texto "Você só encontra aqui" */}
        </Box>
    </Box>
</Box>
  )
}

export default SecaoCapa;