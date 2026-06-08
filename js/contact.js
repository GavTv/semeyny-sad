const Contact = {
  WHATSAPP: '79257161229',
  TELEGRAM: 'kateflow',

  buildMessage(name, contact, message) {
    let text = 'Здравствуйте!';
    if (name) text += ` Меня зовут ${name}.`;
    text += '\n\n';
    if (message) text += message;
    if (contact) text += `\n\nКонтакт: ${contact}`;
    return text;
  },

  getFormData(form) {
    const name = form.querySelector('[name="name"]')?.value.trim() || '';
    const contact = form.querySelector('[name="contact"]')?.value.trim() || '';
    const message = form.querySelector('[name="message"]')?.value.trim() || '';

    if (!name) {
      form.querySelector('[name="name"]')?.focus();
      return null;
    }
    if (!contact) {
      form.querySelector('[name="contact"]')?.focus();
      return null;
    }
    if (!message) {
      form.querySelector('[name="message"]')?.focus();
      return null;
    }

    return { name, contact, message };
  },

  send(form, messenger) {
    const data = this.getFormData(form);
    if (!data) return;

    const text = encodeURIComponent(this.buildMessage(data.name, data.contact, data.message));

    if (messenger === 'telegram') {
      window.open(`https://t.me/${this.TELEGRAM}?text=${text}`, '_blank');
      return;
    }

    window.open(`https://wa.me/${this.WHATSAPP}?text=${text}`, '_blank');
  },

  copyText(el) {
    const text = el.dataset.copy;
    if (!text) return;

    const hint = el.querySelector('.contact-copy__hint');
    const done = () => {
      el.classList.add('contact-copy--done');
      if (hint) hint.textContent = 'Скопировано';
      setTimeout(() => {
        el.classList.remove('contact-copy--done');
        if (hint) hint.textContent = 'Скопировать';
      }, 2000);
    };

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {});
      return;
    }

    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
    done();
  },

  init() {
    document.querySelectorAll('[data-copy]').forEach(el => {
      el.addEventListener('click', () => this.copyText(el));
    });

    document.querySelectorAll('[data-contact-form]').forEach(form => {
      form.addEventListener('submit', e => e.preventDefault());

      form.querySelectorAll('[data-messenger]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.send(form, btn.dataset.messenger);
        });
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => Contact.init());
