import * as React from 'react';
import Api from '../data/api/Api';
import ITask from '../data/model/Task';

class BaseScreen extends React.Component<ITask, ITask> {
    constructor(props: Readonly<ITask>) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            state: 0,
        };
    }

    public render() {
        return(
            <div>
                <form>
                    <label>Id {this.state.id}</label><p/>
                    <label>Name {this.state.name}</label><p/>
                    <label>State {this.state.state}</label><p/>
                    <button className='btnSubmit' onClick={this.getData}>
                        Get by ID
                    </button>
                </form>
            </div>
        );
    }

    private getData =  async (event: React.MouseEvent<HTMLButtonElement>) => {
        await Api.getTask(7).then((task) => {
            console.log(task);
            this.setState(task);
        });
        event.preventDefault();
    }
}

export default BaseScreen;