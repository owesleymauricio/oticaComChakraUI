import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Image,
    Text
} from '@chakra-ui/react';
import React from 'react'

function SecaoSobre() {
    return (
        <>
            <Heading
                as='h3'
                size='lg'
                textAlign={'center'}
                alignContent={'center'}
                marginTop={'10px'}
            >
                QUEM SOMOS NÓS?
            </Heading>

            <Container
                padding={'10px'}
                border={'1px solid 	#A9A9A9'}
                borderRadius={'5px'}
                marginTop={'10px'}
            >
                Fundada em 2001, em Nova Iguaçu - Rio de Janeiro,
                a Óticas vida iniciou suas atividades focada no atendimento ao
                público de renda mais baixa, sempre com o objetivo de proporcionar ao
                cliente bom atendimento, qualidade e preço baixo.
            </Container>

            <SimpleGrid
                columns={{ base: 1, sm: 2 }} // 1 coluna em telas pequenas e 2 colunas em telas maiores (pequeno: sm)
                spacing={2} // Diminuir o espaço entre os itens
                maxW={'800px'}
                m={'20px'}
                autoFlow='row' // Define o fluxo automático para linha
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

                    <Image src='/assets/loja.png'
                        alt='loja'
                        width={600}
                        height={300}
                        mr={4}
                        marginLeft={'auto'}
                        marginRight={'auto'}

                    />

                </Box>

                <Box
                    bg='#F0F8FF'
                    height='300px'
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'5px'}
                >
                    <Heading
                        as='h3'
                        size='xl'
                        textAlign={'center'}
                        alignContent={'center'}
                        marginTop={'10px'}
                    >
                        Nossas Filiais
                    </Heading>

                    <Text
                        textAlign={'center'}
                        size={'lg'}
                    >
                        Hoje temos mais de 20 filiais pelo Brasil e na América
                    </Text>
                </Box>

                <Box
                    bg='#F0F8FF'
                    height='300px'
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'5px'}
                >
                    <Heading
                        as='h3'
                        size='xl'
                        textAlign={'center'}
                        alignContent={'center'}
                        marginTop={'10px'}
                    >
                        Atendimento flexível
                    </Heading>

                    <Text
                        textAlign={'center'}
                        size={'lg'}
                    >
                        Nossa equipe possui é treinada para te atender
                    </Text>
                </Box>

                <Box
                    bg='#DCDCDC'
                    height='300px'
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'5px'}
                >

                    <Image src='/assets/atendimento.png'
                        alt='oculos de grau'
                        width={600}
                        height={300}
                        mr={4}
                        marginLeft={'auto'}
                        marginRight={'auto'}

                    />

                </Box>
            </SimpleGrid>

        </>
    )
}

export default SecaoSobre;