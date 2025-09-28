const header = document.getElementById('header-utama');
header.textContent = 'Seleksi ID Berhasil';

const produkItems = document.getElementsByClassName('produk-item');
Array.from(produkItems).forEach(item => {
  item.classList.add('tebal');
  item.textContent = '[UPDATED] ' + item.textContent;
});

const pendingElem = document.querySelector('[data-status="pending"]');
pendingElem.style.backgroundColor = 'yellow';

const listItems = document.querySelectorAll('ul li');
listItems.forEach(li => {
  li.innerHTML = '<span>Konten Baru dari JS</span>';
});
