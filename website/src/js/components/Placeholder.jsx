import React, { Component } from "react";
import styled from "styled-components";

export default class Placeholder extends Component{
    render(){
        return(
            <Page>
                <h1>Design Create Solar</h1>
            </Page>
        )
    }
}

const Page = styled.div`
    width : 100%;
    hieght : 700;
    min-width: 100%;
    
    display: flex;
    align-items : center
    justify-content : center;
    
`