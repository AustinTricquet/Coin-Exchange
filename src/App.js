import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          balance: 0.5,
          price: 9999.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          balance: 20,
          price: 299.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          balance: 0,
          price: 1.00
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          balance: 100,
          price: 0.23
        },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleShowBalance = this.handleShowBalance.bind(this);
  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function({ ticker, name, price} ) {
      let newPrice = price;
      if ( valueChangeTicker === ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice,
      }

    });
    
    this.setState( {coinData: newCoinData} );
  }

  handleShowBalance() {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleShowBalance={this.handleShowBalance}/>
        <CoinList coinData={this.state.coinData} showBalance={this.state.showBalance} handleRefresh={this.handleRefresh}/>
      </Div>
    );
  }
}

export default App;
