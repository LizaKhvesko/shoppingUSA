import React from 'react';
import styled from 'styled-components';
import Hulik from '../images/hulik.jpg';
import Krasnova from '../images/krasnova.jpg';
import Liza from '../images/liza.jpg'

const TeamBlock = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px;
    padding-top: 30px;
`;
const Person = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ImagePerson = styled.img`
    max-width: 250px;
    height: 250px;
    border-radius: 50%;
`
const TextPerson = styled.p`
    text-align: center;
    margin-top: 20px;
`

const Title = styled.h2`
    text-align: center;
    margin-top: 30px;
`

const Small = styled.p`
    font-size: 17px;
`

export const Team = () => (
    <>
    <Title>Shopping Team</Title>
   <TeamBlock>
       <Person>
           <ImagePerson src={Hulik} alt="hulik"/>
           <TextPerson>
               <h3>Настя Гулик</h3>
               <Small>Минск-Мир</Small>
                <Small>+37544 757-75-02</Small>
           </TextPerson>
       </Person>
       <Person>
           <ImagePerson src={Liza} alt="khvesko"/>
           <TextPerson>
               <h3>Лиза Хвесько</h3>
               <Small>ст.м.Могилевская</Small>
                <Small>+37529 139-25-06</Small>
           </TextPerson>
       </Person>
       <Person>
           <ImagePerson src={Krasnova} alt="krasnova"/>
           <TextPerson>
               <h3>Настя Краснова</h3>
               <Small>ул. Козыревская</Small>
                <Small>+37529 613-67-80</Small>
           </TextPerson>
       </Person>
   </TeamBlock>
   </>
)