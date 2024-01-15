import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonIconProps = TouchableOpacityProps & {
  icon: React.ReactNode;
};

export const ButtonIcon = ({ icon }: ButtonIconProps) => {
  return <TouchableOpacity>{icon}</TouchableOpacity>;
};
