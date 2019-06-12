import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';

interface IColumnProps {
    key: any,
    column: {id: string, title: string, taskIds: Array<any> },
    tasks: Array<{id: string, content: string}>
}

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    min-width: 220px;
    width: 33%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    padding: 8px;
    margin: 0px;
`;

const TaskList = styled.div`
    padding: 8px;
    flex-grow: 1;
    min-height: 100px;
`;

export default class Column extends React.Component<IColumnProps, object> {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <TaskList 
                            {...provided.droppableProps}
                            ref = {provided.innerRef}>
                            {this.props.tasks.map((task: any, index) => 
                                <Task key={task.id} task={task} index={index}/>
                            )}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}