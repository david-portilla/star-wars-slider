import { select, selectId, selectAll } from '../helpers'
class Slider {
  constructor() {
    // console.log('Slider.js')
    this.next = selectId('js-next')
    this.prev = selectId('js-prev')
    this.sliderContainer = selectId('listContainer')
    this.initialPosition = 0
    this.swipeAmount = select('.c-slider__container').offsetWidth
    this.sliderList = select('.c-slider__list')
    this.minLimit = 0
    this.maxLimit = 0

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
    // // Options for the observer (which mutations to observe)
    // const config = { attributes: true, childList: true, subtree: true };
    // // Create an observer instance linked to the callback function
    // const observer = new MutationObserver(this.listenDOM);
    // // Start observing the target node for configured mutations
    // observer.observe(this.list, config);
  }
  // TODO
  // get the width of each slider

  // handle direction of the slider
  controlDirection (id) {
    if (id === 'js-next') {
      this.initialPosition -= this.swipeAmount;
      if (Math.abs(this.initialPosition + this.swipeAmount) >= (this.maxLimit - this.swipeAmount) && this.maxLimit > 0) {
        console.log('next limit reach')
        this.initialPosition = 0
      }
    }
    if (id === 'js-prev') {
      this.initialPosition += this.swipeAmount;
      if (this.initialPosition === this.swipeAmount && this.maxLimit > 0) {
        // console.log('prev limit reach')
        this.initialPosition = -(this.maxLimit - this.swipeAmount)
      }
    }
    this.sliderContainer.style.transform = `translateX(${ this.initialPosition }px)`;
    // console.log('initialPosition ', this.initialPosition);
    // console.log('swipeAmount ', this.swipeAmount);
    // console.log(this.initialPosition - this.swipeAmount)
    // console.log('maxLimit ', this.maxLimit);
  }

  setMaxLimit () {
    this.maxLimit = parseInt(selectAll('.c-card').length) * parseInt(this.swipeAmount)
    // console.log(this.maxLimit)
  }

  // // listen changes on list slider
  // listenDOM (mutationList, observer) {
  //   console.log('listenDOM')
  //   console.log(mutationList)
  //   console.log(observer)

  //   // for (let mutation of mutationsList) {
  //   //   if (mutation.type === 'childList') {
  //   //     console.log('A child node has been added or removed.');
  //   //   }
  //   // }
  // }

}

export default Slider