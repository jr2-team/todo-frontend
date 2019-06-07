import * as React from 'react';
import { styled } from '@material-ui/styles';

interface ITaskProps {
    key: any,
    task: { id: string, content: string}
}



export default class Task extends React.Component<ITaskProps, object> {
    render() {
        return this.props.task.content;
    }
}