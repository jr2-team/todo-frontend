import * as React from 'react';
import { string } from 'prop-types';
import { styled } from '@material-ui/styles';
import { Box, Paper, Typography, Card } from '@material-ui/core';
import { typography } from '@material-ui/system';
import Task from './Task';

interface IColumnProps {
    key: any,
    column: {id: string, title: string, taskIds: Array<any> },
    tasks: Array<any>
}

const MyPaper = styled(Paper) ({
    margin: '16px 16px',
    width: '25%',
});

const TaskList = styled(Box) ({
    padding: '8px',
});

const MyCard = styled(Card) ({
    padding: '8px',
    textAlign: 'justify',
    margin: '8px 0px',
});

export default class Column extends React.Component<IColumnProps, object> {
    render() {
        return (
            <MyPaper>
                <TaskList>
                    <Typography component='h1' color='primary'>
                        {this.props.column.title}
                    </Typography>
                    {this.props.tasks.map((task: any) => <MyCard><Task key={task.id} task={task} /></MyCard>)}
                </TaskList>
            </MyPaper>
        );
    }
}