dataArray(settings)

function dataArray(els) {
  // データの表示
  let array = document.getElementById('items-list');
  els.forEach(el => {
    let lists = ""
    el.items.forEach(item => {
      lists+=`<li>${item.name}</li>`
    })
    const code = `<h1>${el.name}</h1><ul>${lists}</ul>`
    array.insertAdjacentHTML('beforeend',code);
  });
}