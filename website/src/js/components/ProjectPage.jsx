import React, { Component } from 'react';
import LogoHolder from './LogoHolder';
import {styled, makeStyles} from '@material-ui/styles';
import * as constants from '../constants';
import InfoArea from './InfoArea';
import TopBar from './TopBar';


const infoArray = [
    {
        header:"Impact",
        color: constants.HOME_PAGE_LIGHT_COLOR,
        text:"This program aims at developing an end product and/or service that addresses energy needs of deprived communities around the world.",
        align:"right",
        images: [require('../../images/Logo.png'), require('../../images/Logo.png'), require('../../images/Logo.png')]
    },
    {
        header:"@ UCLA",
        color: constants.HOME_PAGE_DARK_COLOR,
        text:"This program aims at developing an end product and/or service that can enhance usage of renewable energy sources at UCLA.",
        align:"left",
        images: [require('../../images/Logo.png'), require('../../images/Logo.png'), require('../../images/Logo.png')]
    }, 
    {
        header:"Collaborate",
        color: constants.HOME_PAGE_LIGHT_COLOR,
        text:"This program aims at working with other clubs at UCLA to develop an end-product that relies on solar energy to function as desired.",
        align:"right",
        images: [require('../../images/Logo.png'), require('../../images/Logo.png'), require('../../images/Logo.png')]
    }
]

export default class ProjectPage extends Component {
    render(props) {
        console.log(props);
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <InfoContainer order={2}>
                {
                    infoArray.map(info=>{ console.log(info)
                        return(
                            <InfoArea header={info.header} color={info.color} text={info.text} align={info.align} images={info.images}/>
                    )})
                }
                </InfoContainer>
            </Container>
        )
    }
}

const Container = styled('div')({
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:"100%",
    overflow:"scroll"
})

const InfoContainer = styled('div')({
    order: 1,
    flex: 1 ,
})