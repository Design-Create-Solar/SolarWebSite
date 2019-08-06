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
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium malesuada enim vitae molestie. Fusce tincidunt non nunc et porta. Donec dictum molestie posuere. Duis tempus lectus enim, ut aliquet augue dapibus ut. Ut sodales vel ipsum placerat finibus. Sed rutrum maximus risus non imperdiet. Etiam lacinia semper leo, id feugiat velit consequat sit amet. Fusce at aliquet turpis. Nam eu dui non purus faucibus vehicula. Donec rutrum risus vel risus commodo faucibus. Aenean eu accumsan lectus. Vivamus viverra ipsum erat, at bibendum orci interdum quis. Nullam tincidunt tellus ligula, sed blandit lectus vehicula id. Cras mattis mollis justo.",
        align:"right"
    },
    {
        header:"Header 2",
        color: constants.HOME_PAGE_DARK_COLOR,
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium malesuada enim vitae molestie. Fusce tincidunt non nunc et porta. Donec dictum molestie posuere. Duis tempus lectus enim, ut aliquet augue dapibus ut. Ut sodales vel ipsum placerat finibus. Sed rutrum maximus risus non imperdiet. Etiam lacinia semper leo, id feugiat velit consequat sit amet. Fusce at aliquet turpis. Nam eu dui non purus faucibus vehicula. Donec rutrum risus vel risus commodo faucibus. Aenean eu accumsan lectus. Vivamus viverra ipsum erat, at bibendum orci interdum quis. Nullam tincidunt tellus ligula, sed blandit lectus vehicula id. Cras mattis mollis justo.",
        align:"left"
    }
]

export default class LandingPage extends Component {
    render() {
        return (
            <Container>
                <TopBar />
                <LogoHolder />
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
    /*boxShadow: "1px 2px black",
    position: "relative",
    zIndex: "10"*/
})