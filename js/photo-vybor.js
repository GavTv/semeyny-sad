const PHOTO_PICKERS = {
  1: {
    image: 'images/photo-grid.jpg',
    alt: 'Подборка 1 — девять растений',
    items: [
      { id: 1, title: 'Азалия листопадная оранжевая', image: 'images/photo-vybor/grid1-01-full.jpg', text: 'Декоративная азалия с насыщенной оранжевой окраской. Коллекционный сорт для полутени и кислых почв.' },
      { id: 2, title: 'Азалия японская белая', image: 'images/photo-vybor/grid1-02-full.jpg', text: 'Нежная японская азалия с белыми соцветиями. Элегантный акцент весеннего сада.' },
      { id: 3, title: 'Азалия японская розовая', image: 'images/photo-vybor/grid1-03-full.jpg', text: 'Розовая японская азалия с плотным цветением. Хорошо смотрится в групповых посадках.' },
      { id: 4, title: 'Котовник (кошачья мята)', image: 'images/photo-vybor/grid1-04-full.jpg', text: 'Ароматный котовник с серо-зелёной листвой. Неприхотливый многолетник для солнечных мест.' },
      { id: 5, title: 'Котовник голубой', image: 'images/photo-vybor/grid1-05-full.jpg', text: 'Котовник с голубыми соцветиями и продолжительным цветением. Привлекает пчёл и бабочек.' },
      { id: 6, title: 'Купена садовая', image: 'images/photo-vybor/grid1-06-full.jpg', text: 'Тенелюбивый многолетник с белыми колокольчиками. Подходит для затенённого бордюра и под кронами деревьев.' },
      { id: 7, title: 'Рододендрон лососевый', image: 'images/photo-vybor/grid1-07-full.jpg', text: 'Рододендрон с нежной лососевой окраской. Коллекционный экземпляр для влажной тени.' },
      { id: 8, title: 'Рододендрон фиолетовый', image: 'images/photo-vybor/grid1-08-full.jpg', text: 'Насыщенный фиолетовый рододендрон. Выразительный куст для кислой почвы и полутени.' },
      { id: 9, title: 'Сосна горная карликовая', image: 'images/photo-vybor/grid1-09-full.jpg', text: 'Карликовая сосна с плотной хвоей. Структурный элемент рокария и контейнерных композиций.' }
    ]
  },
  2: {
    image: 'images/photo-grid-2.jpg',
    alt: 'Подборка 2 — девять растений',
    items: [
      { id: 1, title: 'Пионы', image: 'images/photo-vybor/grid2-01-piony-full.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 2, title: 'Георгины', image: 'images/photo-vybor/grid2-02-georginy-full.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' },
      { id: 3, title: 'Космея', image: 'images/photo-vybor/grid2-03-kosmeya-full.jpg', text: 'Воздушная космея с тонкими лепестками. Июль — сентябрь.' },
      { id: 4, title: 'Циннии', image: 'images/photo-vybor/grid2-04-tsinnii-full.jpg', text: 'Яркие циннии с идеальной формой бутона. Июль — октябрь.' },
      { id: 5, title: 'Подсолнухи', image: 'images/photo-vybor/grid2-05-podsolnukhi-full.jpg', text: 'Декоративные подсолнухи для садовой композиции. Июль — сентябрь.' },
      { id: 6, title: 'Львиный зев', image: 'images/photo-vybor/grid2-06-lvinyy-zev-full.jpg', text: 'Вертикальный акцент в клумбе. Июнь — август.' },
      { id: 7, title: 'Сезонное поле', image: 'images/photo-vybor/grid2-07-hero-full.jpg', text: 'Фрагмент цветущего поля из коллекции. Актуально в сезон цветения.' },
      { id: 8, title: 'Пионы', image: 'images/photo-vybor/grid2-08-piony-full.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 9, title: 'Георгины', image: 'images/photo-vybor/grid2-09-georginy-full.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' }
    ]
  },
  3: {
    image: 'images/photo-grid-3.jpg',
    alt: 'Подборка 3 — девять растений',
    items: [
      { id: 1, title: 'Георгины', image: 'images/photo-vybor/grid3-01-georginy-full.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' },
      { id: 2, title: 'Пионы', image: 'images/photo-vybor/grid3-02-piony-full.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 3, title: 'Сезонное поле', image: 'images/photo-vybor/grid3-03-hero-full.jpg', text: 'Фрагмент цветущего поля из коллекции. Актуально в сезон цветения.' },
      { id: 4, title: 'Космея', image: 'images/photo-vybor/grid3-04-kosmeya-full.jpg', text: 'Воздушная космея с тонкими лепестками. Июль — сентябрь.' },
      { id: 5, title: 'Циннии', image: 'images/photo-vybor/grid3-05-tsinnii-full.jpg', text: 'Яркие циннии с идеальной формой бутона. Июль — октябрь.' },
      { id: 6, title: 'Подсолнухи', image: 'images/photo-vybor/grid3-06-podsolnukhi-full.jpg', text: 'Декоративные подсолнухи для садовой композиции. Июль — сентябрь.' },
      { id: 7, title: 'Львиный зев', image: 'images/photo-vybor/grid3-07-lvinyy-zev-full.jpg', text: 'Вертикальный акцент в клумбе. Июнь — август.' },
      { id: 8, title: 'Космея', image: 'images/photo-vybor/grid3-08-kosmeya-full.jpg', text: 'Воздушная космея с тонкими лепестками. Июль — сентябрь.' },
      { id: 9, title: 'Циннии', image: 'images/photo-vybor/grid3-09-tsinnii-full.jpg', text: 'Яркие циннии с идеальной формой бутона. Июль — октябрь.' }
    ]
  },
  4: {
    image: 'images/photo-grid-4.jpg',
    alt: 'Подборка 4 — девять растений',
    items: [
      { id: 1, title: 'Подсолнухи', image: 'images/photo-vybor/grid4-01-podsolnukhi-full.jpg', text: 'Декоративные подсолнухи для садовой композиции. Июль — сентябрь.' },
      { id: 2, title: 'Львиный зев', image: 'images/photo-vybor/grid4-02-lvinyy-zev-full.jpg', text: 'Вертикальный акцент в клумбе. Июнь — август.' },
      { id: 3, title: 'Пионы', image: 'images/photo-vybor/grid4-03-piony-full.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 4, title: 'Сезонное поле', image: 'images/photo-vybor/grid4-04-hero-full.jpg', text: 'Фрагмент цветущего поля из коллекции. Актуально в сезон цветения.' },
      { id: 5, title: 'Георгины', image: 'images/photo-vybor/grid4-05-georginy-full.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' },
      { id: 6, title: 'Космея', image: 'images/photo-vybor/grid4-06-kosmeya-full.jpg', text: 'Воздушная космея с тонкими лепестками. Июль — сентябрь.' },
      { id: 7, title: 'Циннии', image: 'images/photo-vybor/grid4-07-tsinnii-full.jpg', text: 'Яркие циннии с идеальной формой бутона. Июль — октябрь.' },
      { id: 8, title: 'Пионы', image: 'images/photo-vybor/grid4-08-piony-full.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 9, title: 'Георгины', image: 'images/photo-vybor/grid4-09-georginy-full.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' }
    ]
  }
};

const PhotoPicker = {
  open(item) {
    const overlay = document.getElementById('picker-modal');
    if (!overlay) return;

    document.getElementById('picker-modal-img').src = item.image;
    document.getElementById('picker-modal-img').alt = item.title;
    document.getElementById('picker-modal-title').textContent = item.title;
    document.getElementById('picker-modal-text').textContent = item.text;

    overlay.classList.add('picker-modal--open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    document.getElementById('picker-modal')?.classList.remove('picker-modal--open');
    document.body.style.overflow = '';
  },

  buildPickers() {
    const list = document.getElementById('photo-picker-list');
    if (!list) return;

    Object.entries(PHOTO_PICKERS).forEach(([id, picker]) => {
      const wrap = document.createElement('div');
      wrap.className = 'photo-picker-wrap fade-in';

      const label = document.createElement('p');
      label.className = 'photo-picker__label';
      label.textContent = `Подборка ${id}`;

      const block = document.createElement('div');
      block.className = 'photo-picker';

      const img = document.createElement('img');
      img.className = 'photo-picker__img';
      img.src = picker.image;
      img.alt = picker.alt;

      const grid = document.createElement('div');
      grid.className = 'photo-picker__grid';
      grid.setAttribute('aria-label', `Выбор растения, подборка ${id}`);

      picker.items.forEach(item => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'photo-picker__cell';
        btn.dataset.pickerId = id;
        btn.dataset.pickerCell = item.id;
        btn.setAttribute('aria-label', item.title);
        grid.appendChild(btn);
      });

      block.append(img, grid);
      wrap.append(label, block);
      list.appendChild(wrap);
    });
  },

  init() {
    this.buildPickers();

    document.getElementById('photo-picker-list')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-picker-cell]');
      if (!btn) return;

      const gridId = btn.dataset.pickerId;
      const cellId = Number(btn.dataset.pickerCell);
      const item = PHOTO_PICKERS[gridId]?.items.find(i => i.id === cellId);
      if (item) this.open(item);
    });

    document.getElementById('picker-modal-close')?.addEventListener('click', () => this.close());

    document.getElementById('picker-modal')?.addEventListener('click', e => {
      if (e.target.id === 'picker-modal') this.close();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.close();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => PhotoPicker.init());
