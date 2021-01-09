import { Flex, Icon, Heading, Center, Spacer } from "@chakra-ui/react";

import { FiTwitter } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

//breakpoints
//base
//480px upwards / phone
//768px upwards /Tablet
//992px upwards

export default function Home() {
  return (
    <div>
      <Flex mx={[ 5, 6, 24 ]} my={[ 1, 3 ]} alignItems='center'>
        <Heading color='blue.900' >GER Pool</Heading>
        <Spacer />
        Test
      </Flex>
      <Icon as={FiTwitter} color='Gray 700' />
      <FaTelegramPlane color='Gray 700' />
    </div>
  )
}
