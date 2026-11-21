# Mad Bonkers — лендинг

Чистый HTML/CSS/JS, без сборки и зависимостей.

## Что заменить перед публикацией

1. **Ссылка на RuStore** — в начале `script.js` (`STORE_URL`), формат `https://www.rustore.ru/catalog/app/ИМЯ_ПАКЕТА`.
2. **Картинки** — положи в папку `assets/` файлы с такими именами (пока их нет, показываются заглушки):
   - `screen1.jpg` … `screen5.jpg` — скриншоты (вертикальные, ~1080×2280);
   - `char1.png` … `char4.png` — персонажи (квадратные, лучше с прозрачным фоном);
   - `icon.png` — иконка вкладки (512×512);
   - `og.jpg` — превью для мессенджеров (1200×630).
3. **Тексты** — в `index.html` (имена персонажей, описание, цифры «50+ уровней», «4.8★»).
4. **Почта** — `hello@example.com` в `index.html` и `privacy.html`.
5. **Политика конфиденциальности** — `privacy.html` (её ссылку можно указать в консоли разработчика RuStore).

## Публикация на GitHub Pages (бесплатно)

### Вариант А — через сайт, без командной строки
1. Зарегистрируйся на https://github.com.
2. Нажми **+ → New repository**. Название, например, `mad-bonkers`. Тип **Public**. **Create repository**.
3. На странице репозитория: **uploading an existing file** → перетащи все файлы и папку `assets` → **Commit changes**.
4. **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main**, папка **/ (root)** → **Save**.
5. Через 1–2 минуты сайт будет по адресу `https://ТВОЙ_ЛОГИН.github.io/mad-bonkers/`.

### Вариант Б — через git
```
git init
git add .
git commit -m "Лендинг Mad Bonkers"
git branch -M main
git remote add origin https://github.com/ТВОЙ_ЛОГИН/mad-bonkers.git
git push -u origin main
```
Затем шаг 4 из варианта А.

Обновить сайт: изменить файлы и снова загрузить/запушить — Pages обновится сам.

**Совет:** если назвать репозиторий `ТВОЙ_ЛОГИН.github.io`, адрес будет короче — `https://ТВОЙ_ЛОГИН.github.io/`.
