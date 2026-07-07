# IR Running Club

Telegram Web App для учета пробежек и формирования рейтинга участников клуба.

## Функциональность

- 📊 Учет пробежек (дистанция, время, пульс, тип, место, ощущения)
- 📈 Визуализация прогресса (графики дистанции и темпа за 30 дней)
- 🏆 Таблица лидеров (за всё время, месяц, неделю)
- 👤 Профили пользователей с детальной статистикой
- 🗑️ Удаление своих пробежек
- ✅ Согласие на обработку персональных данных (ФЗ-152)

## Технологии

- HTML/CSS/JavaScript (vanilla)
- Telegram Web App API
- Chart.js для визуализации
- Supabase (база данных и аутентификация)

## Установка и запуск

### Требования
- Telegram аккаунт
- Аккаунт Supabase с настроенным проектом

### Настройка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/GracelandP49/IRunningclub.git
cd ir-running-club
```

2. Настройте Supabase:
   - Создайте таблицу `runs` с полями:
     - `id` (serial, primary key)
     - `user_id` (text)
     - `user_name` (text)
     - `distance` (numeric)
     - `time_minutes` (numeric)
     - `pace` (numeric)
     - `heart_rate` (integer)
     - `type` (text)
     - `place` (text)
     - `feeling` (text)
     - `comment` (text)
     - `created_at` (timestamp, default: now())
   
   - Создайте таблицу `consents` для хранения согласий:
     - `id` (serial, primary key)
     - `user_id` (text)
     - `user_name` (text)
     - `consent_given` (boolean)
     - `consent_text` (text)
     - `ip_address` (text)
     - `user_agent` (text)
     - `created_at` (timestamp, default: now())

3. Обновите конфигурацию в `index.html`:
   - Замените `SUPABASE_URL` на URL вашего проекта
   - Замените `SUPABASE_KEY` на анонимный ключ вашего проекта

4. Настройте Telegram Bot:
   - Создайте бота через @BotFather
   - Настройте Web App URL на ваш хостинг (GitHub Pages, Vercel, и т.д.)

5. Разверните приложение:
   - Загрузите файлы на хостинг
   - Укажите URL в настройках бота

## Безопасность

⚠️ **ВАЖНО**: Не публикуйте в публичном репозитории свои ключи Supabase! 
- Используйте переменные окружения для чувствительных данных
- Настройте Row Level Security (RLS) в Supabase
- Ограничьте права доступа к базе данных

## Лицензия

См. файл [LICENSE](LICENSE)

## Автор

Аль Хашхуш Адам Халидович  
Омск, Россия

## Поддержка

По вопросам обработки персональных данных: администрация Сервиса (через механизмы обратной связи Telegram)