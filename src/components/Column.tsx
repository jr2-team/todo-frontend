import * as React from 'react';
import { string } from 'prop-types';
import { styled } from '@material-ui/styles';
import { Paper, Typography, Card } from '@material-ui/core';
import { typography } from '@material-ui/system';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

interface IColumnProps {
    key: any,
    column: {id: string, title: string, taskIds: Array<any> },
    tasks: Array<{id: string, content: string}>
}

const MyPaper = styled(Paper) ({
    margin: '16px 16px',
});

const TaskList = styled(Card) ({
    padding: '8px',
});

export default class Column extends React.Component<IColumnProps, object> {
    render() {
        return (
            <MyPaper>
                <Typography component='h1' color='primary'>
                        {this.props.column.title}
                </Typography>
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
            </MyPaper>
        );
    }
}