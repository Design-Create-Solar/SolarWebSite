import React from 'react';
import styled from 'styled-components';
import * as constants from '../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeart);

const BottomBanner = () => {
    return (
        <GreyDiv>
                <Container>
                        <BannerText>Made with <Heart><FontAwesomeIcon icon= {faHeart}/></Heart>  by the DCS team</BannerText>
                        <BannerText1>Contact us! <Mailto href= "mailto:ishnoor@g.ucla.edu">Our Email</Mailto></BannerText1>
                        <BannerText2>Copyright © DCS 2019</BannerText2>
                </Container>
        </GreyDiv>

    )
}

const GreyDiv = styled.div`
    background-color: ${constants.HOME_PAGE_DARK_COLOR};
    width:100%;
    display:flex;
    justify-content:center;
    z-index:100;
    align-items:center;
    padding-top:20px
    min-width:400px;
`

const Container = styled.div`
    order:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const BannerText = styled.p`
    color:white;
    order:0;
`

const BannerText1 = styled.p`
    color:white;
    order:1;
`

const BannerText2 = styled.p`
    color:white;
    order:2;
`

const Heart = styled.span`
    color:red
`
const Mailto = styled.a`
    color: white;
`
export default BottomBanner;