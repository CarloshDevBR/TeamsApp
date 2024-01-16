import { TextInput, TextInputProps, View } from 'react-native';

import { ButtonIcon } from '../ButtonIcon';

type TextFieldProps = TextInputProps & {
  containerStyles: string;
  iconEnd?: React.ReactNode;
};

export const TextField = ({ containerStyles, iconEnd, ...rest }: TextFieldProps) => {
  return (
    <View className={`w-full h-[56px] flex flex-row items-center pl-[21px] pr-3 bg-black-primary rounded-md ${containerStyles}`}>
      <TextInput className="h-full flex-1 text-white" placeholderTextColor="#7C7C8A" autoCorrect={false} {...rest} />

      <ButtonIcon icon={iconEnd} />
    </View>
  );
};
