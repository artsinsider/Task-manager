import * as uid from 'uuid';
const  randomId = () => uid.v4();

export const tasks =[
    {
       id: randomId(),
        titleTask: 'Разработка приложения',
        descriptionTask: 'Разработка пользовательского приложения для создания пользователей. Реализовать возможность редактирования полей, валидацию воодимых данны.',
        timeCreate: 'Mon Jan 16 2017 19:14:17 GMT+0300 (MSK)',
        status: false
    },
    {
        id: randomId(),
        titleTask: 'Верстка таблицы',
        descriptionTask: 'Выровнить контент таблицына пелому краю',
        timeCreate: 'Mon Jan 16 2017 19:14:17 GMT+0300 (MSK)',
        status: false
    },
    {
        id: randomId(),
        titleTask: 'Вывод ошибок',
        descriptionTask: 'Обработка эксепшн приходящий с сервера',
        timeCreate: 'Mon Jan 16 2017 19:14:17 GMT+0300 (MSK)',
        status: false
    }
];