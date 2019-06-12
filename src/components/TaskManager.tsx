import * as React from 'react';
// tslint:disable-next-line: ordered-imports
import { DragDropContext, DropResult, Droppable, DroppableId } from 'react-beautiful-dnd';
import { render } from 'react-dom';
import styled from 'styled-components';
import initialData from '../data/initial-data';
import Column from './Column';

const Container = styled.div`
    display: flex;
`;

class TaskManager extends React.Component {
    public state = initialData;

    public onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const sourceId: number = getColumnNumber(source.droppableId);
        const destinationId: number = getColumnNumber(destination.droppableId);

        const start = this.state.columns[sourceId];
        const finish = this.state.columns[destinationId];

        if (start === finish) {
            const newTaskIds = start.taskIds;
            const taskId = newTaskIds[source.index];
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, taskId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [source.index]: newColumn,
                },
            };

            this.setState(newState);
            return;
        } else {
            const startTaskIds = start.taskIds;
            const taskId = startTaskIds[source.index];
            startTaskIds.splice(source.index, 1);
            const newStart = {
                ...start,
                taskIds: startTaskIds,
            };

            const finishTaskIds = finish.taskIds;
            finishTaskIds.splice(destination.index, 0, taskId);
            const newFinish = {
                ...finish,
                taskIds: finishTaskIds,
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [sourceId] : newStart,
                    [destinationId] : newFinish,
                },
            };

            this.setState(newState);
        }
    }

    public render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Container>
                    {this.state.columnOrder.map((columnId: number) => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map((taskId: number) => this.state.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                </Container>
            </DragDropContext>
        );
    }
}

function getColumnNumber(column: string): number {
    switch (column) {
        case 'column-1': return 0;
        case 'column-2': return 1;
        case 'column-3': return 2;
    }
}

export default TaskManager;