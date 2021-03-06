import { ListItem, OrderedList, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Wrap, WrapItem, Button, Flex, Icon, Heading, Text, Center, Spacer, Grid, Box, Link, Circle, Switch, VStack, HStack, Image, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, useMediaQuery, flexboxParser } from "@chakra-ui/react";
import Particles from 'react-particles-js';
import { React, useState } from 'react';
import { useRouter } from 'next/router';
import { en, de } from '../translations';

import { FiTwitter } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineWifi } from 'react-icons/ai'
import { BsBook, BsCheckCircle } from 'react-icons/bs';
import { IoPricetagOutline } from 'react-icons/io5';

//breakpoints
//base
//480px upwards / phone
//768px upwards /Tablet
//992px upwards

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [current, setCurrent] = useState(0);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

  const l = locale === 'en' ? en : de;

  const particlesOptions = {
    particles: { 
      number: { 
        value: 80, 
        density: { 
          enable: true, 
          value_area: 1200, 
        }
      },
      opacity: {
        value: '0.4'
      },
      color: {
        value: '#01de86'
      },
      line_linked: {
        color: '#6bd2a9',
        opacity: '0.4',
        distance: '80',
        width: '0.8'
      },
      size: {
        value: 5
      },
      move: {
        enable: true,
        speed: 6,
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        }
      }
    }
  };

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

  const increment = () => {
		setCurrent(current + 1)
		console.log('onChange:', current);
	};

	const decrement = () => {
		setCurrent(current - 1)
		console.log('onChange:', current);
	};

  const isDisabled = current === 0

  return (
    <>
      <title>German Staking | Cardano Stake Pool</title>
      <Box pos='relative' h='100vh'>
        <Flex px={[ 5, 6, 16, 32 ]} py={[ 6, 6 ]} alignItems='center'>
          {/* <Image src='Logo.svg'w='60px' mr={[ 2, 4, 6 ]} /> */}
          <Center>
            <Image src='logo.svg' boxSize={['60px', '60px', "70px"]} mr='10px'/>
            {isLargerThan768 ?
              <Heading color='gray.900' as="h1" size="2xl">German Staking</Heading>
              :
              null
            }
          </Center>
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
          <Button onClick={onOpen} colorScheme='green' ml='10px'  border="2px" variant="outline">{l.h1ButtonAction}</Button>
          <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
            
          >
            <ModalOverlay />
            <ModalContent w={['95%', '95%', '100%']}>
              <ModalHeader>{l.h1Modal}</ModalHeader>
              <ModalBody>
                {current === 0 ?
                  <>
                    <Text mb='10px' fontSize="sm">{l.pModal1}</Text>
                    <Flex my='10px' mx='auto' justifyContent='space-between' w='210px'>
                        <Image p='5px' border="1px" borderRadius="5px" borderColor="#82ff65ff" boxSize={[ '70px', '80px', '80px' ]} src='/daedalus-logo.svg' alt="Yoroi Wallet Logo"/>
                        <Image p='5px' border="1px" borderRadius="5px" borderColor="#3353e0ff" boxSize={[ '70px', '80px', '80px' ]} src='/yoroi-logo.svg' alt="Yoroi Wallet Logo"/>
                    </Flex>
                    <Text fontSize="sm">
                      {l.pModalText1}<Link color="green.500" href='https://daedaluswallet.io/' target="_blank">Daedalus Wallet</Link>, <Link color="green.500" href='https://play.google.com/store/apps/details?id=com.emurgo' target='_blank'>Android</Link> | <Link color="green.500" href='https://apps.apple.com/app/id1447326389' target='_blank'>IOS</Link>{l.pModalText12}<Link color="green.500" href='https://yoroi-wallet.com/#/' target='_blank'>Web-App</Link>{l.pModalText13}
                    </Text>
                  </>
                :
                null
                }
                {current === 1 ?
                  <>
                    <Text my='10px' fontSize="sm">{l.pModal2}</Text>
                    <Box mb='10px'>
                      <Center>
                        <Text fontSize={['sm', 'sm', 'md']} as="u" fontWeight='bold'>GER</Text>
                      </Center>
                      <Text fontSize={['xs', 'xs', 'xs']} >Pool ID: pool104yydru8l6rjg0c9jryy9luw2s7r9ye4u5x835kvhkngy24986h</Text>
                    </Box>
                    <Center>
                      <Image src='searchOutput.JPG' w='70%'></Image>
                    </Center>
                  </>
                :
                null
                }
                {current === 2 ? 
                  <>
                    <Text my='10px' fontSize="sm" textAlign='center'>{l.pModal3}<Text as='u'>{l.pModal4}</Text>{l.pModal5}</Text>
                    <Center>
                      <Image src='delegateButton.JPG' w='70%'></Image>
                    </Center>
                    <Text my='10px' fontSize="sm" textAlign='center'>{l.pModalText14}</Text>
                  </>
                :
                null
                }
                {current === 2 ?
                  <Button type='primary' variant='outline' colorScheme='green' border="2px" mt={3} mr={3} onClick={onClose}>{l.h1ModalClose}</Button>
                  :
                  <Button type='primary' onClick={increment} variant='outline' colorScheme='green' border="2px" mt={3} mr={3}>{l.next}</Button>
                }
                <Button isDisabled={isDisabled} onClick={decrement} variant='outline' colorScheme='green' border="2px" mt={3} mr={3}>{l.previous}</Button>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
        <Grid position='absolute' top='50%' left={[ 5, 6, 16, 32 ]} h='200px' transform='translateY(-50%)' display={[ 'none', 'none', 'none', 'grid']}>
          <Link target='_blank' href='https://twitter.com/gerstaking'>
            <Icon as={FiTwitter} color='gray.700' w={8} h={8}/>
          </Link>
          <Spacer/>
          <Link target='_blank' href='https://t.me/germanstaking'>
            <Icon as={FaTelegramPlane} color='gray.700' w={8} h={8}/>
          </Link>
          <Spacer/>
          <Link target='_blank' href='https://www.youtube.com/channel/UCMCLQZUcbEbqs_I_jXeAOzw'>
            <Icon as={AiOutlineYoutube} color='gray.700' w={8} h={8}/>
          </Link>
        </Grid>
        <Flex px={[ 5, 6, 16, 32 ]} pb={['10px', '10px', '30px', '50px']} h='calc(100vh - 96px)' flexDirection={[ 'column-reverse', 'column-reverse', 'column-reverse', 'row' ]} justifyContent='space-around'>
          <Box mt={[ '0px', '0px', '0px', 'auto']} maxWidth={['90%', '90%', '300px', '400px']}>
            {!isLargerThan768 ?
              <Heading mb='10px' size='lg' >German Staking</Heading>
              :
              <Heading mb='10px' size="lg" >{l.h1Network}</Heading>
            }
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
        <Wrap maxW='900px' w='90%' my='50px' mx='auto' justifyContent='space-between' textAlign='center'>
          <WrapItem w={[ '100%', '100%', '30%']} justifyContent='center'>
            <Box textAlign='center'>
              <Image w={[ 36, 36, 40 ]} mx='auto' my={3} src='decentralized.svg' alignItems='center'/>
              <Heading size="lg" my={3}>{l.decentralize}</Heading>
              <Text my={3} fontSize="sm" opacity='0.6'>{l.decentralizeText}</Text>
            </Box>
          </WrapItem >
          <WrapItem w={[ '100%', '100%', '30%']} justifyContent='center'>
            <Box textAlign='center'>
              <Image w={[ 36, 36, 40 ]} mx='auto' my={3} src='support.svg' alignItems='center'/>
              <Heading size="lg" my={3}>24/7 support</Heading>
              <Text my={3} fontSize="sm" opacity='0.6'>{l.supportText}</Text>
            </Box>
          </WrapItem>
          <WrapItem w={[ '100%', '100%', '30%']} justifyContent='center'>
            <Box textAlign='center'>
            <Image w={[ 36, 36, 40 ]} mx='auto' my={3} src='wifi.svg' alignItems='center'/>
            <Heading size="lg" my={3}>{l.uptime}</Heading>
            <Text fontSize="sm" opacity='0.6'>{l.uptimeText}</Text>
            </Box>
          </WrapItem>
          <WrapItem>
          </WrapItem>
        </Wrap>
        <Box display='flex' justifyContent='center' py='50px'>
          <Box 
            p='20px' 
            borderWidth="1px" 
            borderRadius="lg"          
            cursor='pointer'
            transition='box-shadow 300ms'
            _hover={{
              boxShadow: '0 13px 15px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            <VStack spacing='30px'>
              <Box w='100%'>
                <Box mb='20px'>
                  <Heading size='lg'>GER</Heading>
                  <Box w={['50px', '50px', '60px']} h='4px' backgroundColor='green.500'></Box>
                </Box>
                <Heading size='3xl'>0.5%</Heading>
                <Text fontSize='2xl' mb='10px'>{l.cardMargin}</Text>
                <Heading size='3xl'>340 ADA</Heading>
                <Text fontSize='2xl'>{l.cardaFee}</Text>
              </Box>
              <Box w='100%' >
                <Flex alignItems='center' mb='4px'>
                  <Icon as={BsCheckCircle} color='green.500' mr='4px'/>
                  <Text>{l.cardMonitoring}</Text>
                </Flex>
                <Flex alignItems='center' mb='4px'>
                  <Icon as={BsCheckCircle} color='green.500' mr='4px'/>
                  <Text>{l.cardFast}</Text>
                </Flex>
                <Flex alignItems='center' mb='4px'>
                  <Icon as={BsCheckCircle} color='green.500' mr='4px'/>
                  <Text>{l.cardPoolMargin}</Text>
                </Flex>
                <Flex alignItems='center' mb='4px'>
                  <Icon as={BsCheckCircle} color='green.500' mr='4px'/>
                  <Text>{l.cardAlerts}</Text>
                </Flex>
                { locale === 'de' ?
                  <Flex alignItems='center' mb='4px'>
                    <Icon as={BsCheckCircle} color='green.500' mr='4px'/>
                    <Text>Betrieben und gehostet in Deutschland</Text>
                  </Flex>
                  :
                  null
                }
              </Box>
              <Button onClick={onOpen} colorScheme='green' ml='10px'  border="2px" variant="outline">{l.h1ButtonAction}</Button>
            </VStack>
          </Box>
        </Box>
        <Box my={['50px', '50px', '100px']} position='relative' height='350px' pointerEvents='none'>
          <Particles

            height='350px'
            style={{
              backgroundColor:'#fff',
              position:'absolute',
              top:'0px',
              left:'0px',
              pointerEvents:'auto'
            }}
            params={particlesOptions}
          />
          <Center h='100%' px={[ 5, 6, 16, 32 ]}>
            <VStack zIndex='1' spacing='30px' textAlign='center'>
              <Heading >{l.startStaking}</Heading>
              <Text opacity='0.6' pointerEvents='auto'>{l.startStakingP}</Text>
              <Button onClick={onOpen} size='md' colorScheme='green' pointerEvents='auto'>{l.startStakingButton}</Button>
            </VStack>
          </Center>
        </Box>
        <Accordion allowToggle maxW='900px' w='90%' mx='auto' my='50px'>
        <AccordionItem>
            <AccordionButton py={[4 , 4 , 6]}>
              <Box flex="1" textAlign="left" p='5px'>
                <Text fontSize={['md', 'md', "lg"]}>{l.withUs}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text mb="8px">{l.usEducationText1}</Text>
              <Text>{l.usEducationText2}</Text>
              <Wrap w="100%" my="30px" justify="space-evenly">
                <WrapItem backgroundImage="screen1.PNG" w={["120px", "150px", "180px"]} h="auto">
                  <Image src="screen1.PNG"/>
                </WrapItem>
                <WrapItem backgroundImage="screen1.PNG" w={["120px", "150px", "180px"]} h="auto">
                  <Image src="screen2.PNG"/>
                </WrapItem>
                <WrapItem backgroundImage="screen1.PNG" w={["120px", "150px", "180px"]} h="auto">
                  <Image src="screen3.PNG"/>
                </WrapItem>
                <WrapItem backgroundImage="screen1.PNG" w={["120px", "150px", "180px"]} h="auto">
                  <Image src="screen4.PNG"/>
                </WrapItem>
              </Wrap>
              <Flex align='center' mb='8px'>
                <Icon color='#01DE86' as={BsBook} color='gray.700' w={8} h={8} mr='8px'/>
                <Text fontSize={['sm', 'sm', 'md']}>{l.usEducation}</Text>
              </Flex>
              <Flex align='center'  mb='8px'>
                <Icon as={AiOutlineWifi} color='gray.700' w={8} h={8} mr='8px'/>
                <Text fontSize={['sm', 'sm', 'md']}>{l.usInternet}</Text>
              </Flex>
              <Flex align='center'>
                <Icon as={IoPricetagOutline} color='gray.700' w={8} h={8} mr='8px'/>
                <Text fontSize={['sm', 'sm', 'md']}>{l.usFees}</Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton py={[4 , 4 , 6]}>
              <Box flex="1" textAlign="left" p='5px'>
                <Text fontSize={['md', 'md', "lg"]}>{l.yoroiH1}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <OrderedList>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.yoroiI1}<Link color="#01de86" href='https://yoroi-wallet.com/' target='_blank'>yoroi-wallet.com</Link>.</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.yoroiI2}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.yoroiI3}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.yoroiI4}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.yoroiI5}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.yoroiI6}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.yoroiI7}</ListItem>
              </OrderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton py={[4 , 4 , 6]}>
              <Box flex="1" textAlign="left" p='5px'>
                <Text fontSize={['md', 'md', "lg"]}>{l.daedalusH1}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <OrderedList>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.daedalusI1}<Link color="#01de86ff" href='https://daedaluswallet.io/' target='_blank'>daedaluswallet.io</Link>.</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.daedalusI2}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.daedalusI3}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.daedalusI4}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.daedalusI5}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.daedalusI6}</ListItem>
              </OrderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton py={[4 , 4 , 6]}>
              <Box flex="1" textAlign="left" p='5px'>
                <Text fontSize={['md', 'md', "lg"]}>{l.mobileH1}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel >
              <OrderedList>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.mobileI1}<Link color="#01de86ff" href='https://play.google.com/store/apps/details?id=com.emurgo' target='_blank'>Android</Link> | <Link color="#01de86ff" href='https://apps.apple.com/app/id1447326389' target='_blank'>IOS</Link>.</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.mobileI2}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.mobileI3}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.mobileI4}</ListItem>
                <ListItem my='3px' fontSize={['sm', 'sm', 'md']}>{l.mobileI5}</ListItem>
              </OrderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box bgImage="url('/bg.svg')" h={[ '500px' ,'704px']} bgPosition='center' bgRepeat='no-repeat' bgSize='cover' position='relative'>
          <Box position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' w='100%' p={[ 5, 6, 16, 32 ]}>
            <Box h='1px' backgroundColor='gray.50' opacity='0.2' mb='20px'/>
            <Flex justifyContent='space-between'>
              <Box>
                <Text fontSize="sm" color='gray.50' opacity='0.5'>{l.pAnyQuestios}</Text>
                <Text fontSize="sm" color='gray.50'>support@germanstaking.com</Text>
              </Box>
              <Flex direction={['column', 'column', 'column', 'column']}>
                <Text fontSize="sm" color='gray.50'  opacity='0.5' mr={[0, 0, 1]}>{l.pMoreInformation}</Text>
                <Flex>
                  <Link target='_blank' ml='auto' mr='5px' href='https://twitter.com/gerstaking'>
                    <Icon as={FiTwitter} color='gray.50' h={[6, 6, 5]} w={[6, 6, 5]}/>
                  </Link>
                  <Link target='_blank' ml={1} mr='5px' href='https://t.me/germanstaking'>
                    <Icon as={FaTelegramPlane} color='gray.50' h={[6, 6, 5]} w={[6, 6, 5]}/>
                  </Link>
                  <Link target='_blank' ml={1} mr='5px' href='https://www.youtube.com/channel/UCMCLQZUcbEbqs_I_jXeAOzw'>
                    <Icon as={AiOutlineYoutube} color='gray.50' h={[6, 6, 5]} w={[6, 6, 5]} />
                  </Link>
                  <Link  target='_blank' ml={1} mr='0px' href='https://www.instagram.com/ger_staking/'>
                    <Icon as={AiOutlineInstagram} color='gray.50' h={[6, 6, 5]} w={[6, 6, 5]} />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}
