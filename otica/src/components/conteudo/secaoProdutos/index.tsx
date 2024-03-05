import {
    Box,
    Image,
    Container,
    Heading,
    SimpleGrid,
    Text,
    ListItem,
    UnorderedList
} from '@chakra-ui/react';
import React from 'react'

function SecaoProduto() {
    return (
        <>
            <Heading
                as='h3'
                size='lg'
                textAlign={'center'}
                alignContent={'center'}
                marginTop={'10px'}
            >
                Nossos produtos
            </Heading>

            <Container
                padding={'10px'}
                border={'1px solid 	#A9A9A9'}
                borderRadius={'5px'}
                marginTop={'10px'}
            >
                Trabalhamos com óculos de grau, óculos de sol,
                lentes transition nos modelos masculino, feminino e infantil.
                Todos os nossos preços são acessíveis e contam com
                a melhor qualidade do mercado.
            </Container>

            <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                spacing={4}
                maxW={'800px'}
                mt={'20px'}
                marginLeft={'auto'}
                marginRight={'auto'}
            >
                <Box
                    bg='#DCDCDC'
                    height='300px'
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'5px'}
                >
                    <Heading
                        as='h3'
                        size='md'
                        textAlign={'center'}
                        alignContent={'center'}
                        marginTop={'10px'}
                    >
                        Óculos de grau
                    </Heading>

                    <Image src='/assets/oculos01.png'
                        alt='oculos de grau'
                        width={400}
                        height={200}
                        mr={4}
                        marginLeft={'auto'}
                        marginRight={'auto'}

                    />
                    <Text
                        textAlign={'center'}
                        size={'lg'}
                    >R$ 500,00</Text>
                </Box>

                <Box
                    bg='#DCDCDC'
                    height='300px'
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'5px'}
                >
                    <Heading
                        as='h3'
                        size='md'
                        textAlign={'center'}
                        alignContent={'center'}
                        marginTop={'10px'}
                    >
                        Óculos transition
                    </Heading>

                    <Image src='/assets/oculos02.png'
                        alt='Óculos transition'
                        width={400}
                        height={200}
                        mr={4}
                        marginLeft={'auto'}
                        marginRight={'auto'}

                    />
                    <Text
                        textAlign={'center'}
                        size={'lg'}
                    >R$ 750,00</Text>
                </Box>

                <Box
                    bg='#DCDCDC'
                    height='300px'
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'5px'}
                >
                    <Heading
                        as='h3'
                        size='md'
                        textAlign={'center'}
                        alignContent={'center'}
                        marginTop={'10px'}
                    >
                        Óculos de sol
                    </Heading>

                    <Image src='/assets/oculos03.png'
                        alt='Óculos de sol'
                        width={400}
                        height={200}
                        mr={4}
                        marginLeft={'auto'}
                        marginRight={'auto'}

                    />
                    <Text
                        textAlign={'center'}
                        size={'lg'}
                    >R$ 700,00</Text>
                </Box>

                <Box
                    bg='#DCDCDC'
                    height='300px'
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'5px'}
                >
                    <Heading
                        as='h3'
                        size='md'
                        textAlign={'center'}
                        alignContent={'center'}
                        marginTop={'10px'}
                    >
                        Óculos infantil
                    </Heading>

                    <Image src='/assets/oculos04.png'
                        alt='Óculos infantil'
                        width={400}
                        height={200}
                        mr={4}
                        marginLeft={'auto'}
                        marginRight={'auto'}

                    />
                    <Text
                        textAlign={'center'}
                        size={'lg'}
                    >R$ 500,00</Text>
                </Box>


            </SimpleGrid>

            <Heading
                as='h3'
                size='sm'
                textAlign={'center'}
                alignContent={'center'}
                marginTop={'10px'}
            >
                Todos os nossos produtos incluem:
            </Heading>

            <Container
                padding={'10px'}
                border={'1px solid 	#A9A9A9'}
                borderRadius={'5px'}
                marginTop={'10px'}
            >
            <UnorderedList>
                <ListItem>Garantia de 1 ano</ListItem>
                <ListItem>Manutenção preventiva</ListItem>
                <ListItem>Descontos especiais na compra da segunda unidade</ListItem>
                <ListItem>Flexibilidade de pagamento</ListItem>
            </UnorderedList>
            </Container>
        </>
    )
}

export default SecaoProduto;