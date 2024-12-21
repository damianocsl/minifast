import { useState, useEffect } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Button } from './Button'

export function FastingTimer() {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval!)
    }

    return () => clearInterval(interval!)
  }, [isActive, time])

  const handleStart = () => {
    setIsActive(true)
  }

  const handleStop = () => {
    setIsActive(false)
    setTime(0)
  }

  const formatTime = (seconds: number) => {
    const getSeconds = `0${seconds % 60}`.slice(-2)
    const minutes = Math.floor(seconds / 60)
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2)

    return `${getHours}:${getMinutes}:${getSeconds}`
  }

  return (
    <YStack gap={4}>
      <Text fontSize={20} style={{ textAlign: 'center' }}>
        {formatTime(time)}
      </Text>
      <XStack gap={4}>
        {isActive ? (
          <Button onPress={handleStop} title="Stop Fast" variant="stop" />
        ) : (
          <Button onPress={handleStart} title="Start Fast" variant="start" />
        )}
      </XStack>
    </YStack>
  )
}
