import * as types from '../constants/taskActionType';

/**
 * Заполение полей задачи
 */
export function editFieldTask(payload){ 
    return{
        type: types.EDIT_TASK_FIELD,
        payload: payload
    }
}

/**
 * Создает новую задачу
 */
export function createTask() {
    return {
        type: types.CREATE_TASK
    }
}

/**
 * Открывает диалоговое окно
 */
export function openDialog() {
    return {
        type: types.OPEN_DIALOG
    }
}

/**
 * Закрывает диалоговое окно
 */
export function closeDialog() {
    return {
        type: types.CLOSE_DIALOG
    }
}

/**
 * Сохраняет новую задачу
 */
export function saveNewTask() {
    return {
        type: types.SAVE_NEW_TASK
    }
}

/**
 * Редактирование задачи
 */
export function editingTask(payload){ 
    return {
        type:types.EDITING_TASK,
        payload: payload
    }
}

/**
 * Меняет сатус задачи завершена/возобновлена
 */
export function completeTask(payload) {
    return{
        type: types.COMPLETE_TASK,
        payload: payload
    }
}

/**
 * Сохраняет изменение в редактированной задаче
 */
export function taskSave(payload) {
    return {
        type: types.SAVE_TASK,
        payload: payload
    }
}

/**
 * Удаляет задачу
 */
export function deleteTask(payload) { 
    return {
        type: types.DELETE_TASK,
        payload: payload
    }
}
/**
 * Отмена создания новой задачи
 * @returns {{type}}
 */
export function cancelCreate() {
    return {
        type: types.CANCEL_CREATE
    }
}