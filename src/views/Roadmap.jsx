import { Box, Container, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { steps } from './roadmapData'
import { RoadmapStep } from './RoadmapStep'
import { useStep } from './useStep'

export const Roadmap = () => {
  const [currentStep, { setStep }] = useStep({
    maxStep: steps.length,
    initialStep: 1,
  })
  return (
    <Box bg="bg-surface">
      <Container
        py={{
          base: '4',
          md: '8',
        }}
      >
        <Container>
          <h1
            style={{
              fontSize: '2.5em',
              paddingBottom: '5vh',
              fontWeight: '500',
            }}
          >Roadmap</h1>
        </Container>
        <Stack
          spacing="0"
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          {steps.map((step, id) => (
            <RoadmapStep
              key={id}
              title={step.title}
              description={step.description}
              description2={step.description2}
              description3={step.description3}
              description4={step.description4}

              isCompleted={currentStep > id}
              isFirstStep={id === 0}
              isLastStep={steps.length === id}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default Roadmap;