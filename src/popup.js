


const dataArray = (els) => {
  // データの表示
  let array = document.getElementById('items-list');
  els.forEach(el => {
    let lists = ""
    el.items.forEach(item => {
      lists+=`<li><button class='btn_get' data-url='${item.url}' ">${item.name}</button></li>`
    })
    const code = `<h1>${el.name}</h1><ul>${lists}</ul>`
    array.insertAdjacentHTML('beforeend',code);
  });
}



const execute = () => {
  dataArray(settings)
  document.querySelectorAll('.btn_get').forEach(
    (btn)=>{
      btn.addEventListener('click', () => {
        chrome.tabs.query( {active:true, currentWindow:true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {url: 'https://twitter.com'}, (content) => {
                alert(content)
                if(!content){
                    alert('Cannot Get! Try Reload First!');
                    return;
                }
            });
        });
      });
    }
  )
}

execute()


