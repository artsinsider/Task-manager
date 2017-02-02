## Менеджер задач
Данное приложение реализовано в рамках обучения(знакомства) с работой связки библиотек **Reactjs + Redux**.

-------
#### **О приложени** 
Приложения позволяет создавать список из задач. 
При создании задачи необходимо указать имя задачи и заполнить поле с описанием. 
После создание задачи она будет помещена в общий список с указанием даты создания *(дату создания задачи редактировать нельзя)*. 
После завершения задачи в поле описания можно добавить соответствующие комментарии и перевести задачу в статус *`выполнена`*

-------

#### **Запуск приложения:**
>  - Скачать приложение можно двумя способами по ссылке либо скачав архив.
>  - Заходим в директорию приложения и запускаем терминал.
>  - Перед инсталлированием всех зависимостей приложения нужно убедиться что версия **node.js** не ниже **v4.6.2**, это можно проверить набрав в сроке терминала **`node -v`**.
>   Если же версия установленного у вас **node.js** не подходит вы можете установить другую версию **`node.js`** с помощью **nvm** для  [`Mac&Linux`](https://www.digitalocean.com/community/tutorials/node-js-ubuntu-14-04-ru) для [`Windows`](https://www.canonium.com/articles/managing-node-versions-with-windows-nvm)
>  - Далее в строке терминала набираем команду **`npm install`** и дожидаемся установки всех зависимостей.
>  После устновки набираем в терминале команду **`npm start`** дожидаемся пока **`webpack`** соберет весь проект после заходим в браузере по адерсу `http://localhost:3000`, порт по необходимости можно указать другой в настройках [сервера](https://github.com/artsinsider/Task-manager/blob/master/server.js)

------
#### **Струкура приложения:**
 - [Actions](https://github.com/artsinsider/Task-manager/blob/master/src/actions/tasksAction.js) - *`Список экшенов`*
 - [Components](https://github.com/artsinsider/Task-manager/tree/master/src/components) - *`Набор используемых в приложении компонентов`*
 - [Constants](https://github.com/artsinsider/Task-manager/blob/master/src/constants/taskActionType.js) - *`Список констант для вызова экшенов`*
 - [Container](https://github.com/artsinsider/Task-manager/tree/master/src/container) - *`Контейнер приложения`*
 - [Init](https://github.com/artsinsider/Task-manager/tree/master/src/init)  - *`Превичные данные для инициализации стора приложения`*
 - [Public](https://github.com/artsinsider/Task-manager/tree/master/src/public) - *`Стили приложения`*
 - [Reducers](https://github.com/artsinsider/Task-manager/tree/master/src/reducers) - *`Редьюсер приложения приложения`*
	

