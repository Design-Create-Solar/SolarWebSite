import React, { Component } from 'react';
import TopBar from '../TopBar';
import AnalyticsDashboard1 from "./DemoPages/Dashboards/Basic/index"

export default class DataPage extends Component {
    render() {
        return (
            <div>
                <TopBar history={this.props.history}/>
                <AnalyticsDashboard1/>
            </div>
        );
    }
}