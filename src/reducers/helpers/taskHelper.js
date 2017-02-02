import * as uid   from 'uuid';

/**
 * Присваиваем уникальный id каждой задаче
 */
const randomId = () => uid.v4();

/**
 *
 * @param args
 */
function updateLocalstorage(args) {
    localStorage.setItem('task' , JSON.stringify(args));
}

/**
 * Заполнеине полей задачи
 * @param {object} state текущее состояние
 * @param {object} payload данные события
 * @param {string} payload.name имя заполняемого поля
 * @param {string} payload.value вводимые данные
 * @param {string} payload.typeActionTask тип производимого действия
 * @returns {object}
 */
export function editFieldTask(state, payload) {
    const {name, value, typeActionTask} = payload;

    updateLocalstorage({...state,[typeActionTask]:{ ...state [typeActionTask],[name]:value}});
    return{...state,[typeActionTask]:{ ...state [typeActionTask],[name]:value}}
}

/**
 * Создает новую задачу
 * @param {object} state текущее состояние
 * `@returns {
 *      {createTask: {
 *      titleTask: string,       // Название задачи
 *      descriptionTask: string, // Описание задачи
 *      id: string,              // Идентификатор задачи
 *      timeCreate: timestamp,   // Время создания задачи
 *      status: boolean          // Статус задачи
 *      },
 *      openDialog: boolean,
 *      notCreateNewTask: boolean,
 *      editTask: boolean}
 *      }`
 */
export function createTask(state) { 
    const createTask = {
        titleTask: '',
        descriptionTask: '',
        id: randomId(),
        timeCreate: new Date().toString(),
        status: false
    };

    updateLocalstorage({...state,
        createTask : createTask,
        openDialog: true,
        notCreateNewTask: true,
        editTask: false
    });

    return {...state,
            createTask : createTask,
            openDialog: true,
            notCreateNewTask: true,
            editTask: false
    }
}

/**
 * Сохраняет новую задачу
 * @param {object} state текущее состояние
 * @param {array} state.tasks массив задач
 * @param {object} state.createTask данные новой задачи после заполнения
 * @returns {{tasks: [], createTask: {}, openDialog: boolean, notCreateNewTask: boolean, editTask: boolean}}
 */
export function saveNewTask(state) {
    const {createTask, tasks }=state;
    tasks.push(createTask);

    updateLocalstorage({...state,
        tasks : tasks,
        createTask: {},
        openDialog: false,
        notCreateNewTask: false,
        editTask: false
    });

    return {...state,
            tasks : tasks,
            createTask: {},
            openDialog: false,
            notCreateNewTask: false,
            editTask: false
    }
}

/**
 * Сохраняет редактируемую задачу
 * @param {object} state текущее состояние
 * @param {object} payload данные события
 * @param {string} payload.id идетификатор задачи
 * @param {array} state.tasks массив задач
 * @param {object} state.editedTask состояние задачи после редактирования
 * @returns {{tasks: {}, editedTask: {}, notCreateNewTask: boolean, editTask: boolean}}
 */
export function taskSave(state, payload) {
    const {id} = payload;
    const {tasks, editedTask} = state;
    const newTask = tasks.map((elem) => {
        if(elem.id == id) {
            elem = editedTask;
            return elem;
        }
        return elem
    });

    updateLocalstorage({
        ...state,
        tasks : newTask,
        editedTask: {},
        notCreateNewTask: false,
        editTask: false
    });

    return {
        ...state,
        tasks : newTask,
        editedTask: {},
        notCreateNewTask: false,
        editTask: false
    }
}

/**
 * Редактирование задачи
 * @param {object} state текущее состояние
 * @param {object} payload данные события
 * @param {string} payload.id идетификатор задачи
 * @param {array} state.tasks массив задач
 * @returns {{editedTask: {}, editTask: boolean}} новое состояние
 */
export function editingTask(state, payload){
    const {id} = payload;
    const {tasks} = state;
    const editedTask = tasks.filter( (e) => {
        if(e.id == id) {
            return e
        }
        return false
    });

    updateLocalstorage({ ...state, editedTask: editedTask[0], editTask: true});
    return { ...state, editedTask: editedTask[0], editTask: true}
}

/**
 * Меняет статус задачи
 * @param {object} state текущее состояние
 * @param {object} payload данные события
 * @param {string} payload.id идетификатор задачи
 * @param {array} state.tasks массив задач
 * @returns {{complete: boolean}} новое состояние
 */
export function completeTask(state, payload) {
    const {tasks} = state;
    const {id} = payload;
    const completesTask = tasks.map( (elm) => {
        if(elm.id == id) {
            return elm.status == false ?
                elm.status = true
                :
                elm.status = false
        }
        return elm.status
    });

    updateLocalstorage({ ...state, complete: completesTask});
    return{ ...state, complete: completesTask}
}

/**
 * Удаляет выбранную задачу
 * @param {object} state текущее состояние
 * @param {object} payload данные события
 * @param {string} payload.id идетификатор задачи
 * @param {array} state.tasks массив задач
 * @returns {object} новое состояние
 */
export function deleteTask(state, payload) {
    const {tasks} = state;
    const {id} = payload;
    const delTask = tasks.filter( del => {
        if(del.id != id) {
            return del
        }
        return false;
    });

    updateLocalstorage({ ...state, tasks: delTask});
    return{ ...state, tasks: delTask}
}

/**
 * Отменить создание задачи
 * @param {object} state текущее состояние
 * @returns {{notCreateNewTask: boolean, editTask: boolean, createTask: {}}}
 */
export function cancelCreate(state) {
    updateLocalstorage({...state, notCreateNewTask : false, editTask: false,  createTask : {}});
    return {...state, notCreateNewTask : false, editTask: false,  createTask : {}}
}