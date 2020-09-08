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
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.00
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.23
        },
      ]
    }
  }


  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
}

export default App;
