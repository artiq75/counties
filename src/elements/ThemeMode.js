export class ThemeMode extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <p id="theme-mode">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142c3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"/></svg>
        <span>Dark Mode</span>
      </p>
    `
    let userTheme = null
    if (window.matchMedia('prefers-color-scheme') === 'light') {
      userTheme = 'light'
    } else {
      userTheme = 'dark'
    }
    const body = document.body
    const theme = window.localStorage.getItem('theme') ?? userTheme
    body.classList.add(theme)
    this.addEventListener('click', () => {
      const themeAdd = body.classList.contains('light') ? 'dark' : 'light'
      const themeRemove = body.classList.contains('light') ? 'light' : 'dark'
      body.classList.remove(themeRemove)
      body.classList.add(themeAdd)
      window.localStorage.setItem('theme', themeAdd)
    })
  }
}
