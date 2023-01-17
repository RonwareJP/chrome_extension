//
console.log('hoge')
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.url)
  window.location.assign(request.url);
  sendResponse('success');
});