const Cart = {
  STORAGE_KEY: 'semeyny-sad-cart',
  WHATSAPP: '79257161229',

  getItems() {
    try {
      const items = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
      return items.map(({ id, name }) => ({ id, name }));
    } catch {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.updateUI();
  },

  addItem(id, name) {
    const items = this.getItems();
    if (items.some(i => i.id === id)) {
      this.showToast(`«${name}» уже в корзине`);
      this.open();
      return;
    }
    items.push({ id, name });
    this.saveItems(items);
    this.showToast(`«${name}» добавлен в корзину`);
    this.open();
  },

  removeItem(id) {
    this.saveItems(this.getItems().filter(i => i.id !== id));
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.updateUI();
  },

  getCount() {
    return this.getItems().length;
  },

  buildOrderMessage(phone, comment) {
    const items = this.getItems();
    const list = items.map(i => `• ${i.name}`).join('\n');
    let text = `Здравствуйте! Хочу оформить заказ:\n\n${list}\n\nТелефон: ${phone}`;
    if (comment) text += `\nКомментарий: ${comment}`;
    return text;
  },

  submitOrder(phone, comment) {
    const text = encodeURIComponent(this.buildOrderMessage(phone, comment));
    window.open(`https://wa.me/${this.WHATSAPP}?text=${text}`, '_blank');
    document.getElementById('cart-phone').value = '';
    document.getElementById('cart-comment').value = '';
    this.clear();
    this.close();
    this.showToast('Заказ отправлен!');
  },

  injectUI() {
    document.querySelectorAll('.cart-toggle').forEach(btn => {
      if (!btn.dataset.bound) {
        btn.dataset.bound = 'true';
        btn.addEventListener('click', () => this.open());
      }
    });

    if (!document.querySelector('.cart-overlay')) {
      document.body.insertAdjacentHTML('beforeend', `
        <div class="cart-overlay" id="cart-overlay"></div>
        <aside class="cart-panel" id="cart-panel" aria-label="Корзина">
          <div class="cart-panel__header">
            <h2 class="cart-panel__title">Корзина</h2>
            <button class="cart-panel__close" id="cart-close" aria-label="Закрыть">&times;</button>
          </div>
          <div class="cart-panel__items" id="cart-items"></div>
          <div class="cart-panel__footer" id="cart-footer">
            <form class="cart-form" id="cart-form">
              <div class="form-group">
                <label for="cart-phone">Телефон *</label>
                <input type="tel" id="cart-phone" name="phone" placeholder="+7 (925) 716-12-29" required>
              </div>
              <div class="form-group">
                <label for="cart-comment">Комментарий</label>
                <textarea id="cart-comment" name="comment" placeholder="Дата, пожелания к букету..."></textarea>
              </div>
              <button type="submit" class="btn btn--whatsapp" style="width:100%">Отправить заказ</button>
            </form>
          </div>
        </aside>
        <div class="cart-toast" id="cart-toast"></div>
      `);

      document.getElementById('cart-overlay').addEventListener('click', () => this.close());
      document.getElementById('cart-close').addEventListener('click', () => this.close());
      document.getElementById('cart-form').addEventListener('submit', e => {
        e.preventDefault();
        const phone = document.getElementById('cart-phone').value.trim();
        const comment = document.getElementById('cart-comment').value.trim();
        if (!phone) return;
        if (this.getCount() === 0) {
          this.showToast('Корзина пуста');
          return;
        }
        this.submitOrder(phone, comment);
      });
    }

    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        this.addItem(btn.dataset.id, btn.dataset.name);
      });
    });

    this.updateUI();
  },

  updateUI() {
    const count = this.getCount();
    const countEl = document.querySelector('.cart-toggle__count');
    if (countEl) {
      countEl.textContent = count;
      countEl.classList.toggle('cart-toggle__count--visible', count > 0);
    }

    document.querySelectorAll('.nav__cart-count').forEach(el => {
      el.textContent = count > 0 ? ` (${count})` : '';
    });

    const itemsEl = document.getElementById('cart-items');
    const footerEl = document.getElementById('cart-footer');
    if (!itemsEl) return;

    const items = this.getItems();
    if (items.length === 0) {
      itemsEl.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty__icon">🌸</div>
          <p>Корзина пуста</p>
          <a href="flowers.html" class="btn btn--outline-green" onclick="Cart.close()">Выбрать цветы</a>
        </div>
      `;
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (footerEl) footerEl.style.display = 'block';
    itemsEl.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item__info">
          <div class="cart-item__name">${item.name}</div>
        </div>
        <button class="cart-item__remove" data-action="remove" data-id="${item.id}" aria-label="Удалить">&times;</button>
      </div>
    `).join('');

    itemsEl.querySelectorAll('[data-action="remove"]').forEach(btn => {
      btn.addEventListener('click', () => this.removeItem(btn.dataset.id));
    });
  },

  open() {
    document.getElementById('cart-overlay')?.classList.add('cart-overlay--open');
    document.getElementById('cart-panel')?.classList.add('cart-panel--open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    document.getElementById('cart-overlay')?.classList.remove('cart-overlay--open');
    document.getElementById('cart-panel')?.classList.remove('cart-panel--open');
    document.body.style.overflow = '';
  },

  showToast(message) {
    const toast = document.getElementById('cart-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('cart-toast--visible');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.remove('cart-toast--visible'), 2500);
  },

  init() {
    this.injectUI();
  }
};

document.addEventListener('DOMContentLoaded', () => Cart.init());
