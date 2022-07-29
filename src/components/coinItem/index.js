import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CoinItem = ({marketCoin}) => {
    const {
        image,
        name,
        market_cap_rank,
        symbol,
        price_change_percentage_24h,
        current_price,
        market_cap
    } = marketCoin;

    const percentageColor = 
        price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || 'white' ;

    const normalizeMarketCap = marketCap => {

        if( marketCap > 1e12 ) {
            return `${(marketCap / 1e12).toFixed(3)} T`;
        }
        if( marketCap > 1e9 ) {
            return `${(marketCap / 1e9).toFixed(3)} B`
        }
        if( marketCap > 1e6 ) {
            return `${(marketCap / 1e6).toFixed(3)} M`
        }
        if( marketCap > 1e3 ) {
            return `${(marketCap / 1e3).toFixed(3)} K`
        }
    }

    return(
        <View style={styles.coinContainer}>
            <Image style={styles.logoImage} source={{uri: image}} />
            <View>
                <Text style={styles.title}> {name} </Text>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>{market_cap_rank}</Text>
                    </View>
                    <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                    <Icon name='caretup' size={10} color={percentageColor}  style={{alignSelf: 'center', marginHorizontal: 5}} />
                    <Text style={{color: percentageColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
                </View>
            </View>
            <View style={styles.priceContainer}>
                    <Text style={styles.text}>{current_price}</Text>
                    <Text style={styles.text}> MCap {normalizeMarketCap(market_cap)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3
    },
    text: {
        color:'white',
        marginRight: 5
    },
    coinContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#282828',
    },
    logoImage: {
        width: 30,
        height: 30,
        alignSelf:'center',
        marginRight: 10
    },
    rankContainer: {
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        borderRadius: 5,
        marginRight: 5
    },
    priceContainer: {
        alignItems: 'flex-end',
        marginLeft:'auto'
    },
    rank:{
        color: 'white'
    }
});

export default CoinItem;