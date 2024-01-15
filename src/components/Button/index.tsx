import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity className="h-[56px] flex justify-center items-center bg-green-primary rounded-md" {...rest}>
      <Text className="text-white font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
