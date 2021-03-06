import { 
    ADD_TASK, 
    RECEIVE_TASK, 
    DELETE_TASK, 
    LOADING_TASKS, 
    LOADING_TASKS_SUCCESS,
    LOADING_TASKS_FAILED
} from '../constants/taskConstants';

const initialState = {
    tasks: [],
    tasksState: 'idle'
};

export function taskReducers(state = initialState, action) {
    switch(action.type) {

        case RECEIVE_TASK:
            return Object.assign({}, state, {
                tasks: state.tasks.concat([action.payload])
            });

        case DELETE_TASK:
            const tasksToDelete = state.tasks.slice(0);

            const indexToDelete = tasksToDelete.findIndex(
                function(task) {
                    return task.id === action.payload.id;
                }
            );

            let newTasks = tasksToDelete.splice(indexToDelete, 1);
            return state = {tasks: newTasks};

        case LOADING_TASKS:
            return Object.assign({}, state, {
                tasksState: 'loading',
            });

        case LOADING_TASKS_SUCCESS:
            return Object.assign({}, state, {
                tasksState: 'success',
            });

        case LOADING_TASKS_FAILED:
            return Object.assign({}, state, {
                tasksState: 'failed',
            });
        
        default:
            return state;
    }
}