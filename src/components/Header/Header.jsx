import React from 'react'
import logo from './logo.svg';
import styled from 'styled-components';

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;

const Head = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const H1 = styled.h1`
    font-size: 4rem;
`;

  
export default function Header(props) {
 
    return (
        <Head className="App-header">
            <Img src={logo} alt="React logo" className="App-logo" />
            <H1 className="App-title">
                Coin Exchange
            </H1>
        </Head>
    )
    
}
