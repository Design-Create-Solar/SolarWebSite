import React, { Component } from 'react';
import LogoHolder from './LogoHolder';
import {styled, makeStyles} from '@material-ui/styles';
import * as constants from '../constants';
import InfoArea from './InfoArea';
import TopBar from './TopBar';


const infoArray = [
    {
        header:"MISSION STATEMENT",
        color: constants.HOME_PAGE_LIGHT_COLOR,
        text:"Design Create Solar strives to bring UCLA students from different educational backgrounds together to brainstorm, design and ultimately produce a solar energy solution to energy-related issues within the UCLA community and deprived communities around the world.",
        align:"right"
    },
    {
        header:"About the Club",
        color: constants.HOME_PAGE_DARK_COLOR,
        text:"Founded in Spring 2019, Design Create Solar is a technology oriented student organization",
        align:"left"
    }
]

export default class LandingPage extends Component {
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <LogoHolder/>
                <InfoContainer order={2}>
                {
                    infoArray.map(info=>{return(
                        <InfoArea header={info.header} color={info.color} text={info.text} align={info.align}/>
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