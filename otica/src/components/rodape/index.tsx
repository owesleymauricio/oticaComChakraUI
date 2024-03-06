import { Box, Text } from '@chakra-ui/react';
import React from 'react'

function Rodape() {
  return (
    <Box
      as="footer"
      width="100%"
      bgGradient='linear( #03081d, #041025)'
      color="white"
      py="4"
      px={{ base: "4", md: "8" }}
      textAlign="center"
    >
      <Text>
        &copy; 2022 Óticas Vida. - Todos os direitos reservados.
      </Text>
    </Box>
  )
}

export default Rodape;