/* eslint-disable-next-line */
import { select, selectAll } from '../helpers'
import Fetch from './Fetch'

class Select {
  constructor() {

    this.init()
  }

  init () {
    // console.log('Select.js')
    this.customSelect = select('.c-select')
    this.optionsSelect = selectAll('.c-select__options-custom')
    this.triggerText = select('.c-select__trigger-text')

    this.customSelect.addEventListener("click", function () {
      this.classList.toggle('is-open')
    })

    for (let i = 0;i < this.optionsSelect.length;i++) {
      this.optionsSelect[ i ].addEventListener('click', (e) => {
        this.currentOption(e.target)
      })
    }

    // create instance of fetch
    this.fetch = new Fetch()  // eslint-disable-line

    // call type element for initial draw
    this.fetch.fetchItem('vehicles')
  }

  currentOption (item) {
    if (!item.classList.contains('selected')) {
      item.parentNode.querySelector('.c-select__options-custom.selected').classList.remove('selected')
      item.classList.add('selected')
      this.triggerText.textContent = item.textContent
      // reset DOM
      this.fetch.resetDOM()
      // call the slider with the new attributte
      this.fetch.fetchItem(item.getAttribute('data-value'))
    }
  }
}

export default Select
