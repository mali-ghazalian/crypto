import React from "react";
import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Coin from '../../../assets/data/crypto.json';

const CoinDatailedScreen = () => {
    const {
        image : {small},
        symbol,
        market_data:{
            market_cap_rank
        }
    } = Coin;

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5}}>
            <Icon name="left" size={15} color="white" />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: small}} style={{width: 20, height:20}} />
                <Text style={{color: 'white', fontWeight: 'bold', marginHorizontal: 5}}> {symbol.toUpperCase()} </Text>
                <View style={{backgroundColor: "#585858", borderRadius:5, paddingHorizontal:5}}>
                    <Text style={{color:"white"}}> #{market_cap_rank} </Text>
                </View>
            </View>
            <Icon name="star" size={15} color="white" />
            
        </View>
    );
}

export default CoinDatailedScreen;