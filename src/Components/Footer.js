import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`

const A = styled.a`
    margin-right: 20px; 
`

export const Footer = () => (
    <FooterBlock>
        <A href="https://github.com/LizaKhvesko" target="_blank">Liza Khvesko© </A>
        <p>2022</p>
    </FooterBlock>
)