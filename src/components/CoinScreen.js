import React, { Component } from "react";
import {View, Text, ActivityIndicator, StyleSheet, FlatList} from  'react-native';
import Http from 'cripto/src/libs/http';
import CoinItem from "./CoinItem";
import Colors from "../res/Colors";
import CoinSearchComp from "./CoinSearchComp";

class CoinScreen extends Component {

  state ={
    coins: [],
    allCoins: [],
    loading: false
  }

  componentDidMount =  () => {
    this.getCoins()
  }

  getCoins = async () => {
    this.setState({loading: true})
    const res = await Http.instance.get("https://api.coinlore.net/api/tickers/")
    this.setState({coins: res.data, allCoins: res.data ,loading: false})
  }

  handlePress = (coin) => {
    this.props.navigation.navigate('CoinDetail', {coin});
  }

  searchChange = (query) => {
    const {allCoins} = this.state
    const  coinsFiltered = allCoins.filter((coin) => {
      return coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
    })
    this.setState({coins: coinsFiltered})
  }

  render() {
    const {coins, allCoins, loading} = this.state

    return (

     <View style={styles.container}>
       <CoinSearchComp onChange={this.searchChange} />
       {loading ? <ActivityIndicator style={styles.loader} color="#FFF" size="large" /> : null}

      <FlatList
        data={coins}
        renderItem={ ({ item }) =>
          <CoinItem
            item={item}
            onPress={ () => this.handlePress(item) }/> } />
     </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16,
  },
  btn_text: {
    color: "#fff",
    textAlign: "center"
  },
  loader: {
    marginTop: 50
  }
})
export default CoinScreen;
