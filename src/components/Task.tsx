import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface ITaskProps {
    key: any;
    task: { id: string, content: string };
    index: number;
}

const MyCard = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
`;

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