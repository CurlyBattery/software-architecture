### Архитектура ПО
> Этот репозиторий нужен для документирования, какие существуют в ообщем архитектуры web и не только приложений, в какизх случаях они используются и что из себя представляют.
---
## Введение

**Проблематика**

Создавая приложение по модульно, наращиваются слишком большие связи между модулями, что в будущем ведет к сложности восприятия и рефакторинга.

Сложность = Деньги = Времени.

Модули должны обладать:

- сильной связанностью (направленные на решение одной четко задачи);
- слабой зацепленностью (как можно менее зависимые от других модулей). 

**Определение**

Архитектура – набор модулей/компонентов и связей между этими компонентами.

Принципы, которые должны работать:

- dry;
- kiss;
- solid;
- patterns.

  Удаление/изменение модуля должно быть простым.

**Работа в команде**

Строгое описание помогает улучшить качество.

**Уровни архитектуры**

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

**Основная суть**

Разделение интерфейса от бизнес-логики.

**Проблематика**

При связанных ui и бизнес логики, не получиться отделить их друг от друга, если понадобиться использовать, что-то одно из этих двух составляющих.

**MVC**

View(представление) обращается не напрямую к логике, а только через controller взаимодействует с model.

**Пример MVC приложения**

Ссылка на проект: <https://github.com/CurlyBattery/software-architecture/tree/main/mvc-node>


