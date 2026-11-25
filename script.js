
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year') && (document.getElementById('year').textContent = String(new Date().getFullYear()));

/* ------------------------------------------------------------------
   PEDIDOS POR WHATSAPP
   Escribe tu numero completo con codigo de pais, sin "+", espacios
   ni guiones. Ejemplo: const WHATSAPP_NUMBER = '123456789';
------------------------------------------------------------------ */
const WHATSAPP_NUMBER = '13478075661';

const form = document.getElementById('order-form');
const status = document.getElementById('form-message');

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const drink = document.getElementById('drink').value;
  const size = document.getElementById('size').value;
  const temperature = document.getElementById('temperature').value;
  const method = document.getElementById('method').value;
  const details = document.getElementById('details').value.trim() || 'Sin detalles adicionales';

  if (!name || !drink) {
    status.textContent = 'Escribe tu nombre y elige una bebida, por favor.';
    return;
  }

  const message =
    'Hola, soy ' + name + '. Quiero ordenar en SJO Coffee: ' + drink +
    ', tamano ' + size + ', ' + temperature + '. Entrega: ' + method +
    '. Detalles: ' + details + '.';

  if (WHATSAPP_NUMBER) {
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank', 'noopener');
    status.textContent = 'Tu pedido esta listo para enviarse por WhatsApp.';
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(message).then(
      () => { status.textContent = 'Pedido preparado y copiado. Agrega tu WhatsApp en script.js para recibir ordenes directas.'; },
      () => { status.textContent = 'Pedido preparado. Agrega tu WhatsApp en script.js para recibir ordenes directas.'; }
    );
  } else {
    status.textContent = 'Pedido preparado. Agrega tu WhatsApp en script.js para recibir ordenes directas.';
  }
});
