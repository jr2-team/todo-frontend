import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BaseScreen from './components/BaseScreen';

ReactDOM.render(
    <BaseScreen {...{ id: 0, name: '', state: 0 }}/>,
    document.getElementById('example'),
);