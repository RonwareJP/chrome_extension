const dataArray = async(els) => {
  // データの表示
  let array = document.getElementById('items-list');
  els.forEach(el => {
    let lists = ""
    el.items.forEach(item => {
      const img_url = item.img_url ? item.img_url: "http://www.google.com/s2/favicons?domain="+item.url;
      const content = `<img src="${img_url}"/><p>${item.name}</p>`;
      lists+=`<li><button class='page-transition' data-url='${item.url}' ">${content}</button></li>`;
    })
    const code = `<h1>${el.name}</h1><ul>${lists}</ul>`
    array.insertAdjacentHTML('beforeend',code);
  });
}



const execute = async() => {
  await dataArray(settings)
  document.querySelectorAll('.page-transition').forEach(
    async (btn)=>{
      btn.addEventListener('click', () =>{
        chrome.tabs.create({url: btn.dataset.url}, tab => {});
      }, false);
    }
  )
}

execute()


