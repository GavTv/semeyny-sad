const Contact = {
  WHATSAPP: '79257161229',

  buildMessage(name, phone, message) {
    let text = 'Здравствуйте!';
    if (name) text += ` Меня зовут ${name}.`;
    text += '\n\n';
    if (message) text += message;
    else text += 'Хотел(а) бы получить консультацию по подбору растений.';
    if (phone) text += `\n\nТелефон: ${phone}`;
    return text;
  },

  submitForm(form) {
    const name = form.querySelector('[name="name"]')?.value.trim() || '';
    const phone = form.querySelector('[name="phone"]')?.value.trim() || '';
    const message = form.querySelector('[name="message"]')?.value.trim() || '';

    if (!phone) {
      form.querySelector('[name="phone"]')?.focus();
      return;
    }

    const text = encodeURIComponent(this.buildMessage(name, phone, message));
    window.open(`https://wa.me/${this.WHATSAPP}?text=${text}`, '_blank');
  },

  init() {
    document.querySelectorAll('[data-contact-form]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        this.submitForm(form);
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => Contact.init());
