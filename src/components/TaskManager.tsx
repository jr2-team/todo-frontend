import * as React from 'react';
import initialData from '../data/initial-data';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { number } from 'prop-types';
import { render } from 'react-dom';
import Column from './Column';


class TaskManager extends React.Component {
    state = initialData

    render() {
        return this.state.columnOrder.map((columnId: number) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map((taskId: number) => this.state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
        })
    }
}

export default TaskManager;