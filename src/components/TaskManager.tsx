import * as React from 'react';
import initialData from '../data/initial-data';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { number } from 'prop-types';
import { render } from 'react-dom';
import Column from './Column';


class TaskManager extends React.Component {
    state = initialData

    onDragEnd = (result: DropResult) => {
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
        console.log(source.index);
        console.log(this.state.columns);
        const column = this.state.columns[0];
        console.log(column)
        const newTaskIds = column.taskIds;
        const taskId = newTaskIds[source.index];
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, taskId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        console.log(newColumn);

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [source.index]: newColumn,
            }
        };

        console.log(newState);

        this.setState(newState);
    };

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                {this.state.columnOrder.map((columnId: number) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map((taskId: number) => this.state.tasks[taskId]);

                return <Column key={column.id} column={column} tasks={tasks} />;
                })}
            </DragDropContext>
        );
    }
}

export default TaskManager;