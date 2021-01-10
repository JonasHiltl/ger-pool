import { Flex, Icon, Heading, Text, Center, Spacer, Grid, Box, Link, Circle, Switch, VStack, HStack, Image } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { en, de } from '../translations'

import { FiTwitter, FiGithub } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

//breakpoints
//base
//480px upwards / phone
//768px upwards /Tablet
//992px upwards

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  const l = locale === 'en' ? en : de;

  const handleLanguageToggle = () => {
    switch (locale) {
      case 'en':
        router.push('/', '/', { locale: 'de' })
        break;
      case 'de':
        router.push('/', '/', { locale: 'en' })
        break;
    }
  }

  return (
    <Box pos='relative' h='100vh'>
      <Flex px={[ 5, 6, 16, 32 ]} py={[ 6, 6 ]} alignItems='center'>
        {/* <Image src='Logo.svg'w='60px' mr={[ 2, 4, 6 ]} /> */}
        <Heading color='gray.900'>GER Pool</Heading>
        <Spacer />
        <HStack spacing='4px'>
          <Image 
            src='/vereinigtes-konigreich.png' 
            boxSize="18px"
            opacity= {locale === 'de' ? '0.4' : '1'}
            filter={locale === 'de' ? 'grayscale(100%)' : 'grayscale(0%)'}
            />
          <Switch size="sm" isChecked={locale === 'de'} onChange={handleLanguageToggle}/>
          <Image 
            src='deutschland.png'
            boxSize="18px"
            opacity= {locale === 'en' ? '0.4' : '1'}
            filter={locale === 'en' ? 'grayscale(100%)' : 'grayscale(0%)'}
            />
        </HStack>
      </Flex>
      <Grid position='absolute' top='50%' right={[ 5, 6, 16, 32 ]} h='200px' transform='translateY(-50%)' display={[ 'none', 'none', 'none', 'grid']}>
        <Link>
          <Icon as={FiTwitter} color='gray.700' w={8} h={8}/>
        </Link>
        <Spacer/>
        <Link>
          <Icon as={FaTelegramPlane} color='gray.700' w={8} h={8}/>
        </Link>
        <Spacer/>
        <Link>
        <Icon as={FiGithub} color='gray.700' w={8} h={8}/>
        </Link>
      </Grid>
      <Box px={[ 5, 6, 16, 32 ]} minHeight='90vh'>
        <Box mt='auto'>
          <Heading mb='10px'>{l.h1Network}</Heading>
          <Flex>
            <VStack spacing='3px'>
              <Circle bg='gray.700' w='7px' h='7px'/>
              <Box bg='gray.300' height='45px' w='3px'/>
              <Circle bg='gray.700' w='7px' h='7px'/>
              <Box bg='gray.300' height='45px' w='3px'/>
              <Circle border='2px solid' color='gray.500' w='30px' h='30px'>
                <Circle bg='gray.700' w='7px' h='7px'/>
              </Circle>
            </VStack>
            <VStack alignItems='left' spacing='auto' ml='20px' maxWidth={['400px']}>
              <Box>
                <Text fontSize="sm" mb='7px'>{l.pText1}</Text>
                <Text fontSize="sm">{l.pText2}</Text>
              </Box>
              <Box pb='7px'>
                <Text fontSize="sm"></Text>
              </Box>
            </VStack>
          </Flex>
        </Box>
      </Box>
      <Box bgImage="url('/bg.svg')" h={[ '500px' ,'704px']} bgPosition='center' bgRepeat='no-repeat' bgSize='cover' position='relative'>
        <Box position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' w='100%' p={[ 5, 6, 16, 32 ]}>
          <Box h='1px' backgroundColor='gray.50' opacity='0.2' mb='20px'/>
          <Flex justifyContent='space-between'>
            <Box>
              <Text fontSize="sm" color='gray.50' opacity='0.5'>Have any question?</Text>
              <Text fontSize="sm" color='gray.50'>jonashiltl@gmx.net</Text>
            </Box>
            <Flex direction={['column', 'column', 'column', 'column']}>
              <Text fontSize="sm" color='gray.50'  opacity='0.5' mr={[0, 0, 1]}>Get more information:</Text>
              <Flex>
                <Link ml='auto' mr='0px'>
                  <Icon as={FiTwitter} color='gray.50' w={4}/>
                </Link>
                <Link ml={1} mr='0px'>
                  <Icon as={FaTelegramPlane} color='gray.50' w={4}/>
                </Link>
                <Link ml={1} mr='0px'>
                  <Icon as={FiGithub} color='gray.50' w={4} />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
