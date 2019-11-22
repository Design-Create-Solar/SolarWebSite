import React from 'react';
import styled from 'styled-components';
import * as constants from '../constants';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeart);

const BottomBanner = () => {
    return (
        <GreyDiv>
            <Container>
                <BannerText1>Contact us! <Mailto href="mailto:designcreatesolar@gmail.com">Our Email</Mailto></BannerText1>
                <BannerText2>Copyright © SOLAR 2019</BannerText2>
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
    font-family: Futura;
`

const Container = styled.div`
    order:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
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