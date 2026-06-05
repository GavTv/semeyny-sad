# Семейный сад — цветочная ферма

Сайт семейной цветочной фермы «Семейный сад». Статический многостраничный сайт на HTML, CSS и JavaScript.

## Страницы

- `index.html` — главная
- `flowers.html` — сезонные цветы
- `contact.html` — контакты

## Возможности

- Адаптивный дизайн для мобильных устройств
- Корзина заказов с отправкой в WhatsApp
- Выезжающее мобильное меню

## Запуск локально

```bash
# Python
python3 -m http.server 8080

# или Node.js
npx serve .
```

Откройте в браузере: http://localhost:8080

## Настройка

Номер WhatsApp для заказов — в файле `js/cart.js`:

```js
WHATSAPP: '79001234567'
```

## Структура

```
├── index.html
├── flowers.html
├── contact.html
├── css/styles.css
└── js/
    ├── main.js
    └── cart.js
```
