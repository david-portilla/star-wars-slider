import { select, selectId, selectAll } from '../helpers'
class Slider {
  constructor() {
    // console.log('Slider.js')
    this.next = selectId('js-next')
    this.prev = selectId('js-prev')
    this.sliderContainer = selectId('listContainer')
    this.sliderList = select('.c-slider__list')
    this.swipeAmount = select('.c-slider__container').offsetWidth
    this.sliderPosition = 0
    this.maxLimit = 0
    this.currentSlide = 0

    // bind methods
    this.controlDirection = this.controlDirection.bind(this)

    // call init method
    this.init()
  }

  init () {
    // console.log('init Slider')
    this.next.addEventListener("click", (e) => {
      this.controlDirection(e.target.id)
    });
    this.prev.addEventListener("click", (e) => {
      this.controlDirection(e.target.id)
    });
    this.sliderPosition = 0
    window.addEventListener('resize', (e) => {
      this.updateWidth(e)
    });
  }

  // handle direction of the slider
  controlDirection (id) {
    this.swipeAmount = select('.c-slider__container').offsetWidth
    if (id === 'js-next') {
      this.sliderPosition -= this.swipeAmount;
      if (Math.abs(this.sliderPosition + this.swipeAmount) >= (this.maxLimit - this.swipeAmount) && this.maxLimit > 0) {
        this.sliderPosition = 0
        console.log('next limit reach')
      }
    }
    if (id === 'js-prev') {
      this.sliderPosition += this.swipeAmount;
      if (this.sliderPosition === this.swipeAmount && this.maxLimit > 0) {
        this.sliderPosition = -(this.maxLimit - this.swipeAmount)
        console.log('prev limit reach')
      }
    }
    this.sliderContainer.style.transform = `translateX(${ this.sliderPosition }px)`;
    this.currentSlide = Math.abs(this.sliderPosition / this.swipeAmount) + 1
  }

  // set max-width based on the amount of slides
  setMaxLimit () {
    return this.maxLimit = parseInt(selectAll('.c-card').length) * parseInt(this.swipeAmount)
  }

  // update width of each card
  updateWidth () {
    if (this.maxLimit > 0) {
      this.swipeAmount = select('.c-slider__container').offsetWidth
      this.sliderPosition = -((this.swipeAmount * this.currentSlide) - this.swipeAmount)
      this.sliderContainer.style.transform = `translateX(${ this.sliderPosition }px)`;
      this.maxLimit = parseInt(selectAll('.c-card').length) * parseInt(this.swipeAmount)
    }
  }

  // reset initial value
  resetValues () {
    this.sliderPosition = 0
    this.maxLimit = 0
    this.currentSlide = 0
  }

}

export default Slider