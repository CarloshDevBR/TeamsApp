import { Image, TouchableOpacity, View } from 'react-native';

import { CaretLeft } from 'phosphor-react-native';

import { useNavigation } from '@react-navigation/native';

import logo from '@assets/logo.png';

type HeaderProps = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View className={`w-full flex-row items-center ${showBackButton ? 'justify-between' : 'justify-center'} py-[12px]`}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.navigate('groups')}>
          <CaretLeft color="#FFF" size={36} />
        </TouchableOpacity>
      )}

      <Image source={logo} width={46} height={55} />
    </View>
  );
};
