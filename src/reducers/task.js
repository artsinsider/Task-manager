import * as helpers           from './helpers/taskHelper';
import * as actionTypes       from '../constants/taskActionType';
import { tasks }              from '../init/tasks';
import {isEmpty}              from 'ramda';


const initialState = {
    fetching: false,
    tasks: tasks,
    createTask : {},
    openDialog: false,
    notCreateNewTask: false,
    editedTask: false

};

/**
 * Инициализирует состояние приложения
 * @param {object} initialState
 */
function getInit (initialState){
    let storageState = {};
    if(localStorage.task){
        storageState = JSON.parse(localStorage.task)
    }

    if(isEmpty(storageState) === false){
        return storageState
    }

    JSON.stringify(initialState)
    localStorage.setItem('task' , JSON.stringify(initialState));
    return initialState
}

export default function task(state = getInit(initialState), action) {
    const {payload, type} = action;
    switch(type) {
        /*** Заполение полей задачи */
        case actionTypes.EDIT_TASK_FIELD:
            return helpers.editFieldTask(state, payload);

        /*** Создает новую задачу*/
        case actionTypes.CREATE_TASK:
            return helpers.createTask(state);

        /*** Открывает диалоговое окно*/
        case actionTypes.OPEN_DIALOG:
            return{...state, openDialog: true, notCreateNewTask: true};

        /*** Закрывает диалоговое окно */
        case actionTypes.CLOSE_DIALOG:
            return{...state, openDialog: false, notCreateNewTask: false};

        /** Сохраняет новую задачу */
        case actionTypes.SAVE_NEW_TASK:
            return helpers.saveNewTask(state);

        /*** Редактирование задачи */
        case actionTypes.EDITING_TASK:
            return helpers.editingTask( state, payload);

        /** Меняет сатус задачи завершена/возобновлена */
        case actionTypes.COMPLETE_TASK:
            return helpers.completeTask(state, payload);

        /*** Сохраняет изменение в редактированной задаче */
        case actionTypes.SAVE_TASK:
            return helpers.taskSave(state, payload);

        /*** Удаляет задачу */
        case actionTypes.DELETE_TASK:
            return helpers.deleteTask(state, payload);

        /** Отмена создания новой задачи */
        case actionTypes.CANCEL_CREATE:
            return helpers.cancelCreate(state, payload);

        default:
            return state;
    }
}

