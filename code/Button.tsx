import { type ButtonProps, StyleSheet, Text, TouchableOpacity } from 'react-native'

interface CustomButtonProps extends ButtonProps {
  variant: 'start' | 'stop'
}

export const Button: React.FC<CustomButtonProps> = ({ title, onPress, variant }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, variant === 'start' ? styles.startButton : styles.stopButton]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#1FB2A8',
  },
  stopButton: {
    backgroundColor: '#B21E28',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})
