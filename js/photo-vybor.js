const PHOTO_PICKERS = {
  1: {
    image: 'images/photo-grid.png',
    alt: 'Подборка 1 — девять растений',
    items: [
      { id: 1, title: 'Львиный зев', image: 'images/photo-vybor/grid-01-lvinyy-zev.jpg', text: 'Антирринум с нежно-розовыми лепестками и характерным бордовым пятном. Вертикальный акцент в клумбе, цветёт с июня по август.' },
      { id: 2, title: 'Рудбекия', image: 'images/photo-vybor/grid-02-rudbekiya.jpg', text: 'Солнечные жёлтые соцветия с тёмным сердцевиной. Неприхотливое многолетнее растение для солнечных участков.' },
      { id: 3, title: 'Лобелия', image: 'images/photo-vybor/grid-03-lobeliya.jpg', text: 'Мелкие фиолетовые цветки плотным ковром. Подходит для кашпо, бордюров и переднего плана композиции.' },
      { id: 4, title: 'Космея', image: 'images/photo-vybor/grid-04-kosmeya.jpg', text: 'Воздушные розовые лепестки на тонких стеблях. Незаменима в натуралистических и романтических посадках.' },
      { id: 5, title: 'Василёк', image: 'images/photo-vybor/grid-05-vasilek.jpg', text: 'Классический синий василёк с характерной рваной каймой лепестков. Лаконичный и узнаваемый элемент луговой клумбы.' },
      { id: 6, title: 'Немезия', image: 'images/photo-vybor/grid-06-nemeziya.jpg', text: 'Яркие красно-белые цветки с контрастным центром. Даёт живое пятно цвета в смешанных посадках.' },
      { id: 7, title: 'Бархатцы', image: 'images/photo-vybor/grid-07-barhatsy.jpg', text: 'Насыщенные оранжево-жёлтые соцветия. Долгое цветение, устойчивость и выразительная форма бутона.' },
      { id: 8, title: 'Мак', image: 'images/photo-vybor/grid-08-mak.jpg', text: 'Алые лепестки с тонкой текстурой и тёмным сердцем. Создаёт ощущение луга и естественного цветения.' },
      { id: 9, title: 'Львиный зев', image: 'images/photo-vybor/grid-09-lvinyy-zev-belyy.jpg', text: 'Бело-фиолетовые шпорцы на вертикальном стебле. Элегантный сорт для акцентных и фоновых посадок.' }
    ]
  },
  2: {
    image: 'images/photo-grid-2.jpg',
    alt: 'Подборка 2 — девять растений',
    items: [
      { id: 1, title: 'Пионы', image: 'images/photo-vybor/grid2-01-piony.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 2, title: 'Георгины', image: 'images/photo-vybor/grid2-02-georginy.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' },
      { id: 3, title: 'Космея', image: 'images/photo-vybor/grid2-03-kosmeya.jpg', text: 'Воздушная космея с тонкими лепестками. Июль — сентябрь.' },
      { id: 4, title: 'Циннии', image: 'images/photo-vybor/grid2-04-tsinnii.jpg', text: 'Яркие циннии с идеальной формой бутона. Июль — октябрь.' },
      { id: 5, title: 'Подсолнухи', image: 'images/photo-vybor/grid2-05-podsolnukhi.jpg', text: 'Декоративные подсолнухи для садовой композиции. Июль — сентябрь.' },
      { id: 6, title: 'Львиный зев', image: 'images/photo-vybor/grid2-06-lvinyy-zev.jpg', text: 'Вертикальный акцент в клумбе. Июнь — август.' },
      { id: 7, title: 'Сезонное поле', image: 'images/photo-vybor/grid2-07-hero.jpg', text: 'Фрагмент цветущего поля из коллекции. Актуально в сезон цветения.' },
      { id: 8, title: 'Пионы', image: 'images/photo-vybor/grid2-08-piony.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 9, title: 'Георгины', image: 'images/photo-vybor/grid2-09-georginy.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' }
    ]
  },
  3: {
    image: 'images/photo-grid-3.jpg',
    alt: 'Подборка 3 — девять растений',
    items: [
      { id: 1, title: 'Георгины', image: 'images/photo-vybor/grid3-01-georginy.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' },
      { id: 2, title: 'Пионы', image: 'images/photo-vybor/grid3-02-piony.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 3, title: 'Сезонное поле', image: 'images/photo-vybor/grid3-03-hero.jpg', text: 'Фрагмент цветущего поля из коллекции. Актуально в сезон цветения.' },
      { id: 4, title: 'Космея', image: 'images/photo-vybor/grid3-04-kosmeya.jpg', text: 'Воздушная космея с тонкими лепестками. Июль — сентябрь.' },
      { id: 5, title: 'Циннии', image: 'images/photo-vybor/grid3-05-tsinnii.jpg', text: 'Яркие циннии с идеальной формой бутона. Июль — октябрь.' },
      { id: 6, title: 'Подсолнухи', image: 'images/photo-vybor/grid3-06-podsolnukhi.jpg', text: 'Декоративные подсолнухи для садовой композиции. Июль — сентябрь.' },
      { id: 7, title: 'Львиный зев', image: 'images/photo-vybor/grid3-07-lvinyy-zev.jpg', text: 'Вертикальный акцент в клумбе. Июнь — август.' },
      { id: 8, title: 'Космея', image: 'images/photo-vybor/grid3-08-kosmeya.jpg', text: 'Воздушная космея с тонкими лепестками. Июль — сентябрь.' },
      { id: 9, title: 'Циннии', image: 'images/photo-vybor/grid3-09-tsinnii.jpg', text: 'Яркие циннии с идеальной формой бутона. Июль — октябрь.' }
    ]
  },
  4: {
    image: 'images/photo-grid-4.jpg',
    alt: 'Подборка 4 — девять растений',
    items: [
      { id: 1, title: 'Подсолнухи', image: 'images/photo-vybor/grid4-01-podsolnukhi.jpg', text: 'Декоративные подсолнухи для садовой композиции. Июль — сентябрь.' },
      { id: 2, title: 'Львиный зев', image: 'images/photo-vybor/grid4-02-lvinyy-zev.jpg', text: 'Вертикальный акцент в клумбе. Июнь — август.' },
      { id: 3, title: 'Пионы', image: 'images/photo-vybor/grid4-03-piony.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 4, title: 'Сезонное поле', image: 'images/photo-vybor/grid4-04-hero.jpg', text: 'Фрагмент цветущего поля из коллекции. Актуально в сезон цветения.' },
      { id: 5, title: 'Георгины', image: 'images/photo-vybor/grid4-05-georginy.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' },
      { id: 6, title: 'Космея', image: 'images/photo-vybor/grid4-06-kosmeya.jpg', text: 'Воздушная космея с тонкими лепестками. Июль — сентябрь.' },
      { id: 7, title: 'Циннии', image: 'images/photo-vybor/grid4-07-tsinnii.jpg', text: 'Яркие циннии с идеальной формой бутона. Июль — октябрь.' },
      { id: 8, title: 'Пионы', image: 'images/photo-vybor/grid4-08-piony.jpg', text: 'Коллекционные пионы с пышным бутоном и нежной окраской. Цветение в июне — июле.' },
      { id: 9, title: 'Георгины', image: 'images/photo-vybor/grid4-09-georginy.jpg', text: 'Декоративные георгины коллекционных линий. Август — октябрь.' }
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
