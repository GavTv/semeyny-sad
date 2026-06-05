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
WHATSAPP: '79257161229'
```

## Домен kateflow.ru

В корне лежит файл `CNAME` — он нужен для GitHub Pages.

**Записи в reg.ru:**

| Тип | Хост | Значение |
|-----|------|----------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `gavtv.github.io` |

В GitHub: **Settings → Pages → Custom domain** → `kateflow.ru`

## Структура

```
├── CNAME
├── index.html
├── flowers.html
├── contact.html
├── css/styles.css
└── js/
    ├── main.js
    └── cart.js
```
