/* eslint-disable-next-line */
import { select, selectAll } from '../helpers'

class Select {
  constructor() {

    this.init()
  }
  init () {
    // console.log('Select.js')
    this.customSelect = select('.c-select')
    this.optionsSelect = selectAll('.c-select__options-custom')

    this.customSelect.addEventListener("click", function () {
      this.classList.toggle('is-open')
    })

    for (let i = 0;i < this.optionsSelect.length;i++) {
      this.optionsSelect[ i ].addEventListener('click', (e) => {
        this.currentOption(e.target)
      })
    }
  }

  currentOption (item) {
    if (!item.classList.contains('selected')) {
      item.parentNode.querySelector('.c-select__options-custom.selected').classList.remove('selected')
      item.classList.add('selected')
      select('.c-select__trigger-text').textContent = item.textContent
      // call the slider with this attributte
      // console.log(item.getAttribute('data-value'))
    }
  }

}

export default Select
