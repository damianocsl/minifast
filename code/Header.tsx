import { Image, Text, XStack } from 'tamagui'
import { BRANDING_SIZE } from './constants'
import appIcon from '~/public/app-icon.png'
import { ToggleThemeButton } from './ToggleThemeButton'

export function Header() {
  return (
    <XStack gap="$4" w="100%" px={8} py={4} jc="space-between" ai="center">
      <Image src={appIcon} w={BRANDING_SIZE} h={BRANDING_SIZE} />
      <Text fs={BRANDING_SIZE}>Minifast</Text>
      <ToggleThemeButton />
    </XStack>
  )
}
