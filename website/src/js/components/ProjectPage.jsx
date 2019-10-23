import React, { Component } from 'react';
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
        images: [require('../../images/ImpactPics/impact1.png'), require('../../images/ImpactPics/impact2.png'), require('../../images/ImpactPics/impact3.png')]
    },
    {
        header:"@ UCLA",
        color: constants.HOME_PAGE_DARK_COLOR,
        text:"This program aims at developing an end product and/or service that can enhance usage of renewable energy sources at UCLA.",
        align:"left",
        images: [require('../../images/@uclaPics/@ucla1.png'), require('../../images/@uclaPics/@ucla2.jpg'), require('../../images/@uclaPics/@ucla3.JPG')]
    }, 
    {
        header:"Collaborate",
        color: constants.HOME_PAGE_LIGHT_COLOR,
        text:"This program aims at working with other clubs at UCLA to develop an end-product that relies on solar energy to function as desired.",
        align:"right",
        images: [require('../../images/Collab Pics/collab1.JPG'), require('../../images/Collab Pics/collab2.jpg'), require('../../images/Collab Pics/collab3.JPG')]
    }
]

export default class ProjectPage extends Component {
    render(props) {
        console.log(props);
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <InfoContainer order={2} style={{paddingTop: "5rem"}}>
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
    overflow:"none"
})

const InfoContainer = styled('div')({
    order: 1,
    flex: 1 ,
})