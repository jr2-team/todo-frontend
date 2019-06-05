import * as React from "react";

export interface BaseScreenProps { 
    title: String
}

class BaseScreen extends React.Component<BaseScreenProps, object> {
    render() {
        let text = this.props.title;

        return(
            <div>
                <h1>{text}</h1>
            </div>
        );
    }
}

export default BaseScreen;