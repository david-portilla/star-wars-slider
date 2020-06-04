import { selectId } from '../helpers'
class Slider {
  constructor() {
    // console.log('Slider.js')
    this.next = selectId('js-next')
    this.prev = selectId('js-prev')
    this.container = selectId('listContainer')
    this.movement = 0

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
  }

  // handle direction of the slider
  controlDirection (id) {
    if (id === 'js-next') {
      this.movement -= 400;
      console.log('scroll next', this.movement);
      this.container.style.transform = `translateX(${ this.movement }px)`;
    }
    if (id === 'js-prev') {
      this.movement += 400;
      console.log('scroll prev', this.movement);
      this.container.style.transform = `translateX(${ this.movement }px)`;
    }
  }
}

export default Slider