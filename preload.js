// preload.js

// All the Node.js APIs are available in the preload process.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
})

// 在上下文隔离启用的情况下使用预加载
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send(info) {
      console.log(info)
      ipcRenderer.send('page-change', info);
    }
  }
});