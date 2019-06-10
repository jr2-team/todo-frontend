import * as React from 'react';
import { styled } from '@material-ui/styles';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from '@material-ui/core';

interface ITaskProps {
    key: any,
    task: { id: string, content: string},
    index: number
}

const MyCard = styled(Card) ({
    padding: '8px',
    textAlign: 'justify',
    margin: '8px 0px',
});

export default class Task extends React.Component<ITaskProps, object> {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                { (provided) => (
                    <MyCard
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref = {provided.innerRef as any}
                    >
                        {this.props.task.content}
                    </MyCard>
                )}
            </Draggable>
        );
    }
}