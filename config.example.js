// Конфигурация приложения
// Скопируйте этот файл в config.js и заполните своими значениями
// Файл config.js не должен коммититься в git (указан в .gitignore)

const CONFIG = {
    // Supabase конфигурация
    SUPABASE_URL: 'https://your-project.supabase.co',
    SUPABASE_KEY: 'your-anon-key-here',
    
    // Дополнительные настройки
    APP_NAME: 'IR Running Club',
    VERSION: '1.0.0'
};

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}