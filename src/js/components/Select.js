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

    this.customSelect.addEventListener("click", () => {
      this.toggleSelect(this.customSelect)
    })

    for (const option of this.optionsSelect) {
      option.addEventListener('click', (e) => {
        // console.log(e.target)
        // console.log(this.currentOption)
        this.currentOption(e.target)
      })
    }

  }

  toggleSelect (obj) {
    obj.classList.toggle('is-open')
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
