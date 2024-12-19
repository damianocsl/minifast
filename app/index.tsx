import { Image } from '@tamagui/image-next'
import { Text, YStack } from 'tamagui'
import { ToggleThemeButton } from '~/code/ToggleThemeButton'
import appIcon from '~/public/app-icon.png'

export function HomePage() {
  return (
    <YStack bg="$color1" mih="100%" gap="$4" ai="center" jc="center" f={1}>
      <Text fontSize={20}>Minifast</Text>
      <Image src={appIcon} width={128} height={128} />
      <ToggleThemeButton />
    </YStack>
  )
}
