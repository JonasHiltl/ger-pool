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
    <Box pos='relative' height='100vh'>
      <Flex px={[ 5, 6, 32 ]} py={[ 6, 6 ]} alignItems='center'>
        <Image src='Logo.svg'w='60px'/>
        <Heading color='blue.900' ml={[ 2, 4, 6 ]}>GER Pool</Heading>
        <Spacer />
        <HStack spacing='4px'>
          <Image 
            src='/vereinigtes-konigreich.png' 
            boxSize="18px"
            opacity= {locale === 'de' ? '0.4' : '1'}
            filter={locale === 'de' ? 'grayscale(100%)' : 'grayscale(0%)'}
            />
          <Switch size="sm" onChange={handleLanguageToggle}/>
          <Image 
            src='deutschland.png' 
            boxSize="18px"
            opacity= {locale === 'en' ? '0.4' : '1'}
            filter={locale === 'en' ? 'grayscale(100%)' : 'grayscale(0%)'}
            />
        </HStack>
      </Flex>
      <Grid position='absolute' top='50%' right={[ 5, 6, 32 ]} h='200px' transform='translateY(-50%)'>
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
      <Box px={[ 5, 6, 32 ]} minHeight='90vh'>
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
                <Text fontSize="sm" mb='5px'>{l.pText1}</Text>
                <Text fontSize="sm">{l.pText2}</Text>
              </Box>
              <Box pb='7px'>
                <Text fontSize="sm"></Text>
              </Box>
            </VStack>
          </Flex>
        </Box>
      </Box>
      <Center p={[ 6, 8, 10, 14 ]}>
        <Grid textAlign='center'>
          <Text fontSize="md" fontWeight="semibold" mb={[5, 8]}>Stay Connected </Text>
          <Text fontSize="md" mb={1} opacity='0.75'>Hamburg, DE</Text>
          <Text fontSize="2xl"  mb={1}>jonashiltl@gmx.net</Text>
        </Grid>
      </Center>
    </Box>
  )
}
