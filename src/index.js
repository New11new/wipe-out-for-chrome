class WipeOut {
  constructor () {
    this.options = {
      "appcache": true,
      "cache": true,
      "cookies": true,
      "downloads": true,
      "fileSystems": true,
      "formData": true,
      "history": true,
      "indexedDB": true,
      "localStorage": true,
      "serverBoundCertificates": true,
      "pluginData": true,
      "passwords": true,
      "webSQL": true
    }
    this.button = document.querySelector('button')
    this.addListener()
  }

  addListener () {
    this.button.addEventListener('click', this.clearBrowserHistory.bind(this))
  }

  callback () {
    console.log('done')
  }

  clearBrowserHistory () {
    chrome.browsingData.remove({ "since" : 0 }, this.options, this.callback)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.wipeout = new WipeOut()
})
