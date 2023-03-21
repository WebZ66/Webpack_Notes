//引入css css文件不需要导出啥东西，所以直接引入css模块即可
import '../css/div_style.css'
import '../css/title_style.less'
import a from '../img/a.png'
const imgEle = document.createElement('img')
imgEle.src = a
document.body.appendChild(imgEle)

const divElm = document.createElement('div')

divElm.textContent = '我是创建的div'
divElm.classList.add('content')
document.body.appendChild(divElm)

const titleElm = document.createElement('h2')
titleElm.innerHTML = '哈哈哈哈，我是h2'
titleElm.className = 'title'
document.body.appendChild(titleElm)
