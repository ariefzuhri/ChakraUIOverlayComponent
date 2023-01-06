import { Button, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { BodyStyle } from './BodyStyle'
import { Section } from '../../components/Section'

export const BodyStyleSection = () => {
  const [triggered, toggleTriggered] = useState(false)

  return (
    <Section
      heading='Override global styles'
      description='Change body background/color, heading font size'
    >
      {triggered ? (
        <BodyStyle
          sx={{
            body: {
              dark: {
                background: 'hsla(169, 66%, 19%, 1)',
                color: 'whiteAlpha.900'
              },
              light: { background: 'gray.100', color: 'gray.900' }
            },
            '.chakra-heading': {
              fontSize: '26px !important'
            }
          }}
        />
      ) : (
        <BodyStyle />
      )}
      <VStack m={4} spacing={3}>
        <Button
          colorScheme='twitter'
          onClick={() => toggleTriggered(!triggered)}
        >
          {triggered ? 'Default' : 'Custom'} global style
        </Button>
      </VStack>
    </Section>
  )
}
