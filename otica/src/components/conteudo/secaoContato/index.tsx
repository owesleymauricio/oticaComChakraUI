import {
  Box,
  Image,
  Text,
  Container,
  Flex,
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import React from 'react'

function SecaoContato() {
  return (
    <>
      <Flex
        maxW={'1200px'}
        bgGradient='linear( #03081d, #041025)'
        flexDir={'column'}
        marginRight={'auto'}
        marginLeft={'auto'}
       
      >
        <Heading
          color={'white'}
          as='h3'
          size='lg'
          textAlign={'center'}
          alignContent={'center'}
          marginTop={'10px'}
        >
          Fale conosco
        </Heading>

        <Container
          color={'white'}
          padding={'10px'}
          border={'1px solid 	#A9A9A9'}
          borderRadius={'5px'}
          marginTop={'10px'}
        >
          Não perca tempo, venha conhecer uma de nossas lojas ou entre
          em contato através de nossas redes sociais ou da central
          de atendimento.
        </Container>

        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          spacing={4}
          mt={'20px'}
          mb={'30px'}
          bgGradient='linear( #03081d, #041025)'
        >

          <Box
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            float={'right'}
          >
            <Heading
              as='h3'
              size='md'
              textAlign={'center'}
              alignContent={'center'}
              marginTop={'10px'}
              marginBottom={'15px'}
              color={'white'}
            >
              Contato
            </Heading>

            <Box
              display={'flex'}
              margin={'5px'}
            >

              <Image src='/assets/local.png'
                color={'white'}
                alt='local'
                width={10}
                height={5}
                mr={4}


              />
              <Text
                color={'white'}
                textAlign={'center'}
                size={'lg'}
              >
                Nova Iguaçu, RJ
              </Text>
            </Box>

            <Box
              display={'flex'}
              margin={'5px'}
            >

              <Image src='/assets/telefone.png'
                color={'white'}
                alt='telefone'
                width={10}
                height={5}
                mr={4}


              />
              <Text
                color={'white'}
                textAlign={'center'}
                size={'lg'}
              >
                (21) 9999-9999
              </Text>
            </Box>

            <Box
              display={'flex'}
              margin={'5px'}
            >

              <Image src='/assets/email.png'
                marginLeft={'60px'}
                color={'white'}
                alt='email'
                width={10}
                height={5}
                mr={4}

              />
              <Text
                color={'white'}
                textAlign={'center'}
                size={'lg'}

              >
                contato@oticavida.com
              </Text>
            </Box>

          </Box>

          <Box
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            float={'left'}
          >
            <Heading
              as='h3'
              size='md'
              textAlign={'center'}
              alignContent={'center'}
              marginTop={'10px'}
              marginBottom={'15px'}
              color={'white'}
            >
              Redes Sociais
            </Heading>

            <Box
              display={'flex'}
              margin={'5px'}
            >
              <Image src='/assets/fb.png'
                color={'white'}
                alt='facebook'
                width={10}
                height={5}
                mr={4}


              />
              <Text
                color={'white'}
                textAlign={'center'}
                size={'lg'}
              >
                /OticaVidarj
              </Text>
            </Box>

            <Box
              display={'flex'}
              margin={'5px'}
            >
              <Image src='/assets/ig.png'
                color={'white'}
                alt='istagram'
                width={10}
                height={5}
                mr={4}


              />
              <Text
                color={'white'}
                textAlign={'center'}
                size={'lg'}
              >
                @oticavidarj
              </Text>
            </Box>

            <Box
              display={'flex'}
              margin={'5px'}
            >
              <Image src='/assets/tt.png'
                color={'white'}
                alt='twiter'
                width={10}
                height={5}
                mr={4}


              />
              <Text
                color={'white'}
                textAlign={'center'}
                size={'lg'}
              >
                @oticavidarj
              </Text>
            </Box>


          </Box>

        </SimpleGrid>

      </Flex>
    </>
  )
}

export default SecaoContato;