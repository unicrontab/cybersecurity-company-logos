import React from 'react';

import vendors from './cyber-vendors.json';

import './App.css';
import './Icon.css';

const Icon = props => (
    <div className="iconContainer">
        <img src={`https://logo.clearbit.com/${props.url}`} alt="logo not found" />
        <a href={props.url}> {props.label} </a>
    </div>
);

const iconList = vendors.records.map(icon => (
    <Icon
        key={icon.id}
        label={icon.field_2_raw.label}
        url={icon.field_2_raw.url}
    />
));

const App = () => (
    <div className="App">
        {iconList}
    </div>
);

export default App;
