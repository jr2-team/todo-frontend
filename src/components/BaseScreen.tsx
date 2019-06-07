import * as React from 'react';
import Header from './Header';
import TaskManager from './TaskManager';

class BaseScreen extends React.Component<object, object> {
    render() {
        return(
            <div>
                <Header />
                <TaskManager />
            </div>
        );
    }
}

export default BaseScreen;