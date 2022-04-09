import { Divider, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'
import { RoadmapStepCircle } from './RoadmapStepCircle'

export const RoadmapStep = (props) => {
  const { isActive, isCompleted, isLastStep, isFirstStep, title, description, ...stackProps } =
    props
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })
  const orientation = useBreakpointValue({
    base: 'vertical',
    md: 'horizontal',
  })
  return (
    <Stack
      spacing="4"
      direction={{
        base: 'row',
        md: 'column',
      }}
      flex="1"
      {...stackProps}
    >
      <Stack
        spacing="0"
        align="center"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <Divider
          display={isMobile ? 'none' : 'initial'}
          orientation={orientation}
          borderWidth="1px"
          borderColor={isFirstStep ? 'transparent' : isCompleted || isActive ? 'accent' : 'inherit'}
        />
        <RoadmapStepCircle isActive={isActive} isCompleted={isCompleted} />
        <Divider
          orientation={orientation}
          borderWidth="1px"
          borderColor={isCompleted ? 'accent' : isLastStep ? 'transparent' : 'inherit'}
        />
      </Stack>
      <Stack
        spacing="0.5"
        pb={isMobile && !isLastStep ? '8' : '0'}
        align={{
          base: 'start',
          md: 'center',
        }}
      >
        <Text color="emphasized" fontWeight="medium">
          {title}
        </Text>
        <Text color="muted">{description}</Text>
      </Stack>
    </Stack>
  )
}
