import { TextInput, TextInputProps } from 'react-native';

type TextFieldProps = TextInputProps & {
  iconEnd?: React.ReactNode;
};

export const TextField = ({ iconEnd, ...rest }: TextFieldProps) => {
  return <TextInput className="h-[56px] pl-[21px] bg-black-primary rounded-md text-white font-normal" placeholderTextColor="#7C7C8A" {...rest} />;
};
