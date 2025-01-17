import { ReactNode } from 'react'

import { AlertProps, Box, Button, Container, Stack } from '@/atoms'
import { Notify } from '@/molecules'

import { GroupsIcon } from 'assets/tsx'

export const AlertTemplate = ({
  btnText,
  children,
  onBtnClick,
  status = 'error',
  text,
  title = 'Whoops!',
}: {
  btnText: string
  children?: ReactNode
  onBtnClick: () => void
  status?: AlertProps['status']
  text: string
  title?: string
}) => {
  return (
    <Container maxWidth="md">
      <Box borderWidth={1} borderRadius="lg" py={6} px={4} mt={5}>
        <Stack spacing={4}>
          <GroupsIcon sx={{ height: 50, width: 50 }} />

          <Notify title={title} status={status}>
            {text}
          </Notify>
          <div>{children}</div>
          <Button onClick={onBtnClick} mt={4} alignSelf="end">
            {btnText}
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}
