import { Box, Flex, Image } from '@chakra-ui/react'
import { Section } from '../components/Section'

export const ImageSection = () => (
  <Section heading='Image Overlay'>
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      <Box
        position='relative'
        my={3}
        _hover={{
          '> .profile-img': { opacity: 1 },
          '> .overlay-text': { opacity: 1 },
        }}
      >
        <Image
          className='profile-img'
          src='https://images.unsplash.com/photo-1533241242276-46a506b40d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'
          opacity={1}
          transition='0.5s ease'
        />
        <Image
          className='overlay-text'
          src='https://bit.ly/dan-abramov'
          opacity={1}
          transition='0.5s ease'
          boxSize='140px'
          transform='translate(20%, -120%)'
        />
      </Box>
    </Flex>
  </Section>
)
