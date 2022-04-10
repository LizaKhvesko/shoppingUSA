import React from 'react';
import styled from 'styled-components';
import bannerImg from '../images/banner.jpg';

const ShopsBlock = styled.section`
    padding: 40px 80px;
    display: flex;
    justify-content: space-between;
    align-items: top;
`;

const List = styled.div`
    width: 250px;
    padding: 15px;
    line-height: 25px;
    border: 3px solid #fbec5d;
    box-shadow: 5px 10px 10px rgba(0,0,0,0.25);
`;

const SmallTitle = styled.h3`
    margin-bottom: 15px;
    text-align: center;
`

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-position: center;
    background-image: url(${bannerImg});
`

const Ul = styled.ul`
    text-align: center;
`

export const Shops = () => (
    <>
    <Banner></Banner>
    <ShopsBlock className="shops-block">
        <List>
            <SmallTitle>MultyBrand</SmallTitle>
            <Ul>
                <li><a href="https://www.6pm.com" target="_blank">6pm</a></li>
                <li><a href="https://www.asos.com" target="_blank">ASOS</a></li> 
                <li><a href="https://www.ebay.com" target="_blank">EBAY</a></li> 
                <li><a href="https://www.walmart.com" target="_blank">Walmart</a></li> 
                <li><a href="https://www.finishline.com" target="_blank">Finishline</a></li> 
                <li><a href="https://www.jimmyjazz.com" target="_blank">JimmyJazz</a></li> 
                <li><a href="https://www.yoox.com/us" target="_blank">YOOX</a></li> 
                <li><a href="https://www.jomashop.com" target="_blank">Jomashop</a></li> 
                <li><a href="https://www.sierra.com" target="_blank">Sierra</a></li> 
                <li><a href="https://www.nordstromrack.com" target="_blank">Nordstrom Rack</a></li> 
                <li><a href=" https://www.amazon.com" target="_blank">Amazon</a></li> 
                <li><a href="https://www.saksoff5th.com" target="_blank">Saksoff 5th</a></li> 
                <li><a href="https://www.belk.com" target="_blank">Belk</a></li> 
                <li><a href="https://www.zulily.com" target="_blank">Zulily</a></li> 
                <li><a href="https://www.zappos.com/" target="_blank">Zappos</a></li> 
            </Ul>
        </List>
        <List>
             <SmallTitle>SingleBrand</SmallTitle>
             <Ul>
                <li><a href="https://www.victoriassecret.com" target="_blank">Victoria Secret</a></li>
                <li><a href="https://www.intimissimi.com/us/" target="_blank">Intimissimi</a></li>
                <li><a href="https://www.michaelkors.com" target="_blank">Michael Kors</a></li>
                <li><a href="https://www.calvinklein.us/en" target="_blank">Calvin Klein</a></li>
                <li><a href="https://us.puma.com/en/us/" target="_blank">Puma</a></li>
                <li><a href="https://www.armaniexchange.com/us" target="_blank">Armani Exchange</a></li>
                <li><a href="https://usa.tommy.com/en/women" target="_blank">Tommy Hilfiger</a></li>
                <li><a href="https://www.mangooutlet.com/us/" target="_blank">Mango US</a></li>
                <li><a href="https://www.mangooutlet.com/gb/women" target="_blank">Mango UK</a></li>
            </Ul>
        </List>
        <List>
             <SmallTitle>Children & Family</SmallTitle>
             <Ul>
                <li><a href="https://oldnavy.gap.com" target="_blank">Old, Gap, Banana</a></li>
                <li><a href="www.gapfactory.com" target="_blank">Gapfactory</a></li>
                <li><a href="https://m2.hm.com/m/en_us/index.html" target="_blank">H&M</a></li>
                <li><a href="https://direct.asda.com/george/clothing/10,default,sc.html" target="_blank">George</a></li>
                <li><a href="https://ru.iherb.com" target="_blank">iHerb</a></li>
                <li><a href="https://www.carters.com" target="_blank">Carter's</a></li>
                <li><a href="https://www.shopdisney.com" target="_blank">Disney</a></li>
                <li><a href="https://www.childrensplace.com/us/" target="_blank">Children's Place</a></li>
            </Ul>
        </List>
    </ShopsBlock>
   </>
)