import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';

const HeaderBlock = styled.header`
    width: 100%;
    height: 150px;
    padding: 20px 80px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
     
`;

const LogoImg = styled.img`
    display: block;
    width: 100px;
`;

const Name = styled.h1`
    flex-grow: 1;
    font-size: 50px;
    text-align: center;
`;

export const Header = () => (
    <HeaderBlock className="header-block">
        <HeaderContainer className="header-container">
            <LogoImg src={Logo} alt="logo"/>
            <Name className="name">Стильные вместе</Name>
            <LogoImg src={Logo} alt="logo" className="logo"/>
        </HeaderContainer>
    </HeaderBlock>
)