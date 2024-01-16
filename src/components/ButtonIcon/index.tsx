import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonIconProps = TouchableOpacityProps & {
  icon: React.ReactNode;
};

export const ButtonIcon = ({ icon, ...rest }: ButtonIconProps) => {
  return <TouchableOpacity {...rest}>{icon}</TouchableOpacity>;
};
