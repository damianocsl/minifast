import { useState } from 'react'
import { Switch, YStack, XStack, Label } from 'tamagui'

export function Settings() {
  const [notifications, setNotifications] = useState(false)

  return (
    <YStack gap="$4" ai="center" jc="center" f={1}>
      <h1>Settings</h1>
      <XStack gap="$4" ai="center" jc="space-between" f={1}>
        <Label>Notifications</Label>
        <Switch checked={notifications} onCheckedChange={setNotifications}>
          <Switch.Thumb animation="quicker" backgroundColor="white" />
        </Switch>
      </XStack>
    </YStack>
  )
}
