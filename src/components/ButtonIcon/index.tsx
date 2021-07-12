import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import DiscordImg from '../../assets/discord.png'
import { styles } from './styles';

type Props = TouchableOpacityProps & { //PASSA AS PROPRIEDAS DO BOTAO POR PROPS, INCLUSIVE AS RESERVADAS COMO O ACTIVITYOPACITY POR EX
    title: string;
}

export function ButtonIcon({title, ...rest} : Props){// ...rest é pra pegar todas as propriedades dos botao, pra nao ter que pasar uma por uma
    return(
    <TouchableOpacity 
    style={styles.container}
    {...rest}//pra nao ter que passar todas as propriedades uma por uma
    > 
        <View style={styles.iconWrapper}>
            <Image source={DiscordImg} style={styles.icon} />            
        </View>

        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
    );
}