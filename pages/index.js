import { IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Wrap, WrapItem, Button, Flex, Icon, Heading, Text, Center, Spacer, Grid, Box, Link, Circle, Switch, VStack, HStack, Image, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, useMediaQuery, flexboxParser } from "@chakra-ui/react";
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
  const router = useRouter()
  const { locale } = router
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

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
        <Heading color='gray.900' as="h1" size='2xl' >{isLargerThan768 ? 'GER Pool' : 'GER'}</Heading>
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
        <Button onClick={onOpen} ml='10px' borderColor="#01de86ff" border="2px" variant="outline">{l.h1ButtonAction}</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent w={['95%', '95%', '100%']}>
            <ModalHeader>{l.h1Modal}</ModalHeader>
              <ModalCloseButton right='10px' />
            <ModalBody >
              <VStack>
                <Box>
                  <Text mb='10px' fontSize="sm" textAlign='center'>{l.pModal1}</Text>
                  <Flex my='10px' mx='auto' justifyContent='space-between' w='210px'>
                    <Link p='3px' border="1px" borderRadius="5px" borderColor="#82ff65ff" href='https://daedaluswallet.io/' target="_blank">
                      <Image boxSize={[ '70px', '80px', '80px' ]} src='/daedalus-logo.svg' alt="Yoroi Wallet Logo"/>
                    </Link>
                    <Link p='3px' border="1px" borderRadius="5px" borderColor="#3353e0ff" href='https://yoroi-wallet.com/' target="_blank">
                      <Image boxSize={[ '70px', '80px', '80px' ]} src='/yoroi-logo.svg' alt="Yoroi Wallet Logo"/>
                    </Link>
                  </Flex>
                  <Text my='10px' fontSize="sm" textAlign='center'>{l.pModal2}</Text>
                </Box>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button variant='outline' borderColor="#01de86ff" border="2px" mr={3} onClick={onClose}>
                {l.h1ModalClose}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Grid position='absolute' top='50%' left={[ 5, 6, 16, 32 ]} h='200px' transform='translateY(-50%)' display={[ 'none', 'none', 'none', 'grid']}>
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
      <Flex px={[ 5, 6, 16, 32 ]} pb={['10px', '10px', '30px', '50px']} h='calc(100vh - 96px)' flexDirection={[ 'column-reverse', 'column-reverse', 'column-reverse', 'row' ]} justifyContent='space-around'>
        <Box mt={[ '0px', '0px', '0px', 'auto']} maxWidth={['90%', '90%', '300px', '400px']}>
          <Heading mb='10px' size="lg" >{l.h1Network}</Heading>
          <Flex>
            <VStack spacing='3px'>
              <Circle bg='gray.700' w='7px' h='7px'/>
              <Box bg='gray.300' height='45px' w='3px'/>
              <Circle bg='gray.700' w='7px' h='7px'/>
              <Box bg='gray.300' height='45px' w='3px'/>
              <Circle border='2px solid' color='#01de86ff' w='30px' h='30px'>
                <Circle bg='gray.700' w='7px' h='7px'/>
              </Circle>
            </VStack>
            <VStack alignItems='left' spacing='auto' ml='20px'>
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
        <Image src='hero.svg' zIndex='-1' maxWidth={['100%', '90%', '90%', 'calc( 100% - 450px)']} mr={[ 'auto', 'auto', 'auto','0px']} ml='auto' />
      </Flex>
      <Wrap maxW='900px' w='90%' mx='auto' justifyContent='space-between' textAlign='center'>
        <WrapItem w={[ '100%', '100%', '30%']} justifyContent='center'>
          <Box textAlign='center'>
            <Image w={[ 36, 36, 36 ]} mx='auto' my={3} src='decentralized.svg' alignItems='center'/>
            <Heading size="lg" my={3}>Test</Heading>
            <Text my={3} fontSize="sm" opacity='0.6'>Operating an environment-friendly 5 Watt stakepool 24/7 with 99.9% uptime</Text>
          </Box>
        </WrapItem >
        <WrapItem w={[ '100%', '100%', '30%']} justifyContent='center'>
          <Box textAlign='center'>
            <Image w={[ 36, 36, 36 ]} mx='auto' my={3} src='support.svg' alignItems='center'/>
            <Heading size="lg" my={3}>24/7 support</Heading>
            <Text my={3} fontSize="sm" opacity='0.6'>Highly reliable because of very good Internet connection in order to get all my slots</Text>
          </Box>
        </WrapItem>
        <WrapItem w={[ '100%', '100%', '30%']} justifyContent='center'>
          <Box textAlign='center'>
            <Heading size="lg">Test</Heading>
            <Text fontSize="sm" opacity='0.6'>Running my stakepool from home, helping to truly decentralize the Cardano ecosystem</Text>
          </Box>
        </WrapItem>
        <WrapItem>
        </WrapItem>
      </Wrap>
      <Accordion allowToggle maxW='900px' w='90%' mx='auto'>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box bgImage="url('/bg.svg')" h={[ '500px' ,'704px']} bgPosition='center' bgRepeat='no-repeat' bgSize='cover' position='relative'>
        <Box position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' w='100%' p={[ 5, 6, 16, 32 ]}>
          <Box h='1px' backgroundColor='gray.50' opacity='0.2' mb='20px'/>
          <Flex justifyContent='space-between'>
            <Box>
              <Text fontSize="sm" color='gray.50' opacity='0.5'>{l.pAnyQuestios}</Text>
              <Text fontSize="sm" color='gray.50'>jonashiltl@gmx.net</Text>
            </Box>
            <Flex direction={['column', 'column', 'column', 'column']}>
              <Text fontSize="sm" color='gray.50'  opacity='0.5' mr={[0, 0, 1]}>{l.pMoreInformation}</Text>
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
