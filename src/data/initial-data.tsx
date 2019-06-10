
const initialData = {
    tasks: [
        { id: 'task-1', content: 'Take out the garbage' },
        { id: 'task-2', content: 'Watch my favorite show' },
        { id: 'task-3', content: 'Charge my phone' },
        { id: 'task-4', content: 'Take sport exercises' }
    ],
    columns: [
        {
            id: 'column-1',
            title: 'To do',
            taskIds: [0, 1, 2, 3]
        },
    ],
    columnOrder: [0],
};

export default initialData;
