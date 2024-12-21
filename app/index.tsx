import { YStack } from 'tamagui'
import { FastingTimer } from '~/code/FastingTimer'
import { Header } from '~/code/Header'

export function HomePage() {
  return (
    <YStack bg="$color1" gap="$4" ai="center" jc="center" f={1} backgroundColor="blue">
      <Header />
      <FastingTimer />
    </YStack>
  )
}
