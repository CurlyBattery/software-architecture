# Архитектура ПО
> Этот репозиторий нужен для документирования понятий определений в веб тухнологиях.
---
## Введение

### Проблематика

Создавая приложение по модульно, наращиваются слишком большие связи между модулями, что в будущем ведет к сложности восприятия и рефакторинга.

Сложность = Деньги = Времени.

Модули должны обладать:

- сильной связанностью (направленные на решение одной четко задачи);
- слабой зацепленностью (как можно менее зависимые от других модулей). 

### Определение

Архитектура – набор модулей/компонентов и связей между этими компонентами.

Принципы, которые должны работать:

- dry;
- kiss;
- solid;
- patterns.

Удаление/изменение модуля должно быть простым.

### Работа в команде

Строгое описание помогает улучшить качество.

### Уровни архитектуры

Уровни:

- архитектура микросервисных приложений;
- архитектура приложение:
  1. mvc;
  2. чистая архитектура;
  3. onion (многослойная);
  4. архитектура frontend приложений;
  5. реактивная архитектура.
---
## MV* Архитектуры

### Паттерн MVC

### Основная суть

Разделение интерфейса от бизнес-логики.

### Проблематика

При связанных ui и бизнес логики, не получиться отделить их друг от друга, если понадобиться использовать, что-то одно из этих двух составляющих.

View(представление) обращается не напрямую к логике, а только через controller взаимодействует с model.

### Итоги

В модели - логика, в контроллере - управление/валидация входных данных, во вью - отображение.

### Пример MVC приложения

Ссылка на проект: <https://github.com/CurlyBattery/software-architecture/tree/main/mvc-node>

### Паттерн MVVM

Вместо контроллера в MVC здесь выступает ViewModel.

### Flow

Пользователь взаимодействует с ui, это изменяет данные во view, view отправляет новые данные в view model, view model напрвляет их в model, где уже нахдится бизнес логика.

---
## Эволюция web приложений

### Начало

World wide web - 1990, изначально это обмен документами, страницами, которые связаны гиперссылками. -> <br> 
Далее появился css. -> <br>
С сервера начали отправлять html-страницы. -> <br>
Появляется backend, который уже может общаться с базой данных и отправлять динамические данные. -> <br>
Далее появляется javascript, предназначенный для создания динамики и логики на страницах. -><br>
С появлением асинхронных запросов, фронтенд уже не перезагружал страницу, пока приходят данные с сервера, а ждал пока они придут и получал json, а не всю страницу целиком. -><br>
Вместо большого количества html страниц начали использовать spa - single page application.-> <br>
Теперь html, css, js файлы отправляет не бэкенд, а web server по типу apache или nginx. -><br>
Когда файлов теперь приходится отправлять слишком много, на помощь приходят сборщики vite/rollup/webpack. -><br>
На замену реляционным базам данных появляются nosql базы данных(например mongodb), а также cache базы данных, для быстрого доступа к данных(redis). -><br>
Для автоматизации процесса развертывания web приложения начинают использовать ci/cd pipeline, приложения начинают упаковывать в docker контейнеры. -><br>
Монолит заменяется микросервисами для больших приложений, с большим количеством разнопланового содержания. Каждый из микросервисом обладает своим ci/cd pipeline для удобства развертывания каждого из сервисом. 
Появляется api gateway для единого шлюза обращения ко всем сервисам, занимается перенаправлением. -><br>
Для хранения большого количества файлов начинают использовать сервис s3 - simple storage service(amazon, s3). -><br>
Появляется потребность в аналитике clickHouse, база данных предназначенная для быстрого доступа к аналитическим данным. -><br>
Чтобы сообщения не терялись при обмене микросервисов, начали появляться брокеры сообщений(rabbitmq, kafka). -><br>
Для регулярных действий, например для рассылки писем в 9 утра, появляется планировщик(scheduler). -><br>
Появляется надобность в разделении дата центров(балансировщик), которые обращаются к одинаковым сервисам, во избежание, потере доступа ко всем данным, если не работает единый дата центр. Что касается фронтенда, то сервес nginx тоже надо разделять по разным дата центрам. -><br>
На фронтенде тоже появляется необходимость использования монорепозиториев с микросервисами и пакетами, в которых хранятся общий ui kit, общая конфигурация. -><br>
Для полнотекстового поиска используется elastic search. -><br>
Управлением контейнерами занимается kubernetes. -><br>
Для обмена данных бэкенда и фронетенда используется rest api, soap, graphql, grpc. -><br>
Для real-time взаимодействий используется web sockets. -> <br>
Для обработки больших данных big data используются инструменты hadoop, hdfs. -><br>

---
## Event Loop

### Архитектура Браузера

1. user interface
2. browser engine
3. rendering engine - web kit, который используется в ios, chrome. Занимается обработкой html, css.
4. networking - история сайтов.
5. js interpreter - v8, используется на платформе Node JS, в браузере Chrome.
6. ui backend
7. data persistence - local/set storage, файловая система, cookie.

**Архитектура движка рендера (webkit)**

Сюда приходит html, css, <br> 
webkit парсит их с помощью двух парсеров, <br>
из html получается DOM дерево / из css получаются правила стиля, <br>
далее строится дерево рендера.

### Что такое Event Loop?
Это отдельный механизм, который позволяет использовать неблокирующую модель ввода/вывода.
Не является частью javascript. Он предоставляется Средой, браузер или node js.

### Браузерный Event Loop (stack, micro/macro tasks, web, api, RAF, mutation observer, queueMicrotask, стадии рендера, переполнение стека)

Call stack - которое можно представить в виде стопки бумаг. 
Ограничен по количеству находимых в нем функций. 
Рекурсию, чтобы стек не переполнялся можно заменить обычным обходом цикла.
Call Stack это часть js и никакого отношения к Event Loop не имеет.

Event Loop содержит внутри себя Task queue, которая получает например handler и выполняет код с задержкой.
Задачи из очереди выполняются только после вызова всех функций из стека.
За очередь отвечает Event Loop, а за call stack отвечает движок js.

Промежуточное звено между call stack и task queue это web api.
Task queue разделена на macrotask queue(событий) и microtask queue(задач)

Promise всегда попадают в microtask queue. 
В приоритете event loop всегда microtask.

Сначала в event loop выполняются все синхронные задачи, потом все microtask
Что создает microtask?
1. Промисы;
2. queueMicrotask;
3. mutationObserver - это механизм, который следит за изменением DOM дерева. 

Что создает macrotask?
1. Таймеры;
2. события (click, загрузка изображения);
3. браузерные нюансы(рендер)

**Render**
На моменте получение браузером html и css, образуется dom и cssom соответсвенно, и только потом создается render дерево.

1. Компиляция стилей(style calculation) - применение селекторов к элементам. Чем проще селектор - тем лучше.
2. Layout - по размерам и позиции расставляет элементы.
3. Paint - красить. Рисует пиксели.
4. Compositing - работа со слоями.

Рендер - очень дорогостоящая операция.
Что вызывает render:
- Изменение размера окна;
- изменение шрифта;
- изменение контента;
- добавление/удаление классов/стилей;
- манипуляции с DOM;
- изменение ориентации;
- изменение размеров/позиции;
- вычисление размеров/позиции.

### Движки JavaScript (stack, память, heap)

Движок js:
- heap и call stack;
- выделение и сбор мусора;
- компиляция js в машинный код;
- оптимизация.

### Однопоточность/многопоточность в Node JS

Node JS - программная платформа, язык разработки браузерных приложений.

Состоит из:
- Двидок v8;
- libuv.

Задача - преоброзвать исходный код на js в машинный код, за счет движка v8. Кроссплатформенный i/o, Event Loop за счет Libuv.

Плюсы и минусы Event Loop:

<h5>+ Быстрая обработка большого количества запросов, если они несложные;</h5> 
<h5>- получается слишком много асинхронного кода;</h5> 
<h5>- вычисления создают большую нагрузку.</h5> 
 
Есть многопоточный ввод/вывод данных, а есть неблокирующий ввод/вывод.

Блокирующий ввод/вывод - когда программа оставливается пока происходит какой то запрос или чтение файла.
У них есть поток выполнения, который строчка за строчкой выполняет команды.

nginx - неблокирующий i/o;
apache - классичесий многопоточный web server.

JS - одонопоточный, асинхронность достигается с помощью Event Loop.
Node JS однопоточный но(v8 - C++), у Libuv 4 потока по дефолту(C), НО с версии 11.7.0 можно управлять потоками из кода с помощью модуля worker_threads.

### Event Loop в Node JS (очереди, шаблон редактор, демультиплексер, событий, планировщик потоков)

Планировщик потоков - часть операционной системы, который отвечает за паралльное выолнение задач. Выделяет потокам процессорное время, память.

В файле [Multithreading](./multithreading/index.js) 5 запрос выполняется только тогда, когда осводится один из 4 потоков. Это означает

Демультиплексор событий - благодря ему неболкирующий i/o становится доступен. Некоторый интерфейс уведомлений о событиях.
Задача - сборка и установка в очередь событий ввода и вывода.

Есть бесконечный цикл Event Loop и Очередь событий.
Обработчик в node js представлен функцией обратного вызова(callback).

Шаблон REACTOR, на котором устроен Node JS.

1. Приложение создает новую операцию i/o, передав запрос демультиплексору событий.
2. Демультиплексор добавляет новые события в очередь.
3. Event Loop поэтапно проходится по очереди и выполняет событие.
4. Вызывается соотвесвенный обработчик, возвращается в приложение.
5. Либо начинается все сначала, либо передается обратно в цикл событий.

Node js инициализирует Event Loop.

Фаза:
1. Promise.
2. Таймеры.
2. I/o коллбэки кроме setImidiate.
3. Ожидание и подготовка.
4. Опрос.
5. Проверка. setImidiate.
6. Коллбэки 'close'.

---

## ООП

> Процедурное программирование - это подход, при котором на вход программе приходят какие то данные, программа выполняет какие то действия, и выводит результат вычилений. 

### Классы, Объекты, Свойства, Методы, Коструктор

> Класс - список харктеристик и методов, с помощью которых можно охартеризовать сущность.

> Объект - конктретный представитель класса, у которого каждая характеристика имеет значение.

> Свойства - набор характеристик класса.

> Методы - действия, которые может совершать объект.

> Коструктор - блок кода, который выполняется при инициализации объекта, и задает ему некоторые параметры.

ООП построенно на 3 основных концепциях:
- инкапсуляция;
- наследование;
- полиморфизм.

### Инкапсуляция и сокртытие. Модификаторы доступа
> Инкапсуляция - класс-капсула, которая объекдиняет в себе свойства и методы.

> Сокртытие - концепция, которая помогает распределить доступность свойств и методов внутри класса.

Модификаторы доступа:
- public - можно вызвать извне;
- private - можно использовать только внутри класса.

### Наследование
> Наследование - комплекция, при котором один класс, может принимать методы и свойства родительского класса, расширяя его.

### Полиморфизм
> Полиморфизм - принцип, который позволяет одному и тоже коду работать с разными типами данных.

> Параметрический полиморфизм - истинный, каждый из объектов может использовать функции, принимающую только родительский класс, без необходимости указывать всех детей.

> ad-hoc полиморфизм - мнимый, когда используется перегрузка методов.

### Агрегация и композиция
> Агрегация - если один объект получает ссылку-указатель на другой объект в процессе конструирования.

> Композиция - если один объект создает другой объект и время жизни 'части' зависит от времени жизни целого.

### Интерфейсы и абстрактные классы

> Интерфейс - как олгавление в учебнике, говорит что надо сделать, но не гововрит как.

> Абсрактный класс - как в интерфейсе можно создавать абстрактные методы, но также можно прописывать методы с какой то логикой.

### Dependency Injection

__*kolorotur В классе есть свойство, имеющее тип какого-то другого класса — это агрегация.
Значение для этого свойства передается через конструктор или присваивается извне — это инъекция.__

Слои:
1. Работа с базой данных.
2. Бизнес-логика.

---

## SOLID принципы

### Введение
> Solid - Аббривиатура из 5 принципов, приницип - правила, ограничения.
Все это помогает программистам от проекта к проекту разговаривать на одном языке.

Какой код можно назвать хорошим:
1. Масштабируемость.
2. Порог вхождения в проект.
3. Код должен быть простым.

### Single responsibility principle (SPR)

> Принцип единственной ответсвенности - одна сущность должна решать всего одну задачу.

Проблемы, которые решает этот принцип:
- ломается что-то одно - ломается все;
- ухудшается читабельность;
- трудно вносить изменения.

Итоги:
1) Появляются модули, читабельность кода.
2) Вносить изменения проще.
3) Избавление от антипаттерна GodObject. 
4) Класс инкапсулирует решение одной задачи.

### Open-closed principle (OCP)

> Принцип открытости/закрытости - программные сущности должны быть открыты для расширения, но закрыты для изменения.

Итоги:
1) Нет необходимости в регресии.
2) Меньше вероятность ошибки.

### Liskov Substitution Principle (LSP)

> Принцип подстановки Барбары Лисков - функции, сущности, которые используют родительских тип, должны точно также работать и с дочерними классами, при этом ничего не должно ломаться в логике пргограммы.
Наследуемый класс должен дополнять, а не замещать поведение базового класса.

### Interface segregation principle (ISP)

> Принцип разделения интерфейса - программные сущности не должны зависеть от методов, которые они не используют.
Нельзя заставлять клиента, реализовывать интерфейс, которым он не пользуется.

Итоги:
1) Избавляем программные сущности от методов, которые они не используют.
2) Получаем более предсказуемую работу.
3) Код становится менее связанным.

### Dependency inversion principle (DIP)

> Принцип инверсии зависмости - модули высокого уровня, не должны зависеть от модулей более низкого уровня, все они должны зависеть от абстракции, а абстракции в это время не должны зависеть от деталей. В свою очередь детали должны зависеть от абстракций.