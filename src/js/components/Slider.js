class Slider {
  constructor() {
    console.log('Slider.js')
    // const select = document.querySelector.bind(document);
    // const selectAll = document.querySelectorAll.bind(document);
    // this.selectId = document.getElementById.bind(document);
    // this.loading = this.selectId('loading')
    // this.container = this.selectId('listContainer')

    // bind methods
    // this.showLoading = this.showLoading.bind(this)

    // call init method
    this.init()

  }

  init () {
    console.log('init Slider')
  }

  // handle direction of the slider
  controlDirection () {
    // let value = 0;
    // if (this.id === "js-next") {
    //   value -= 400;
    //   console.log("scroll next", value);
    //   container.style.transform = `translateX(${ value }px)`;
    // }
    // if (this.id === "js-prev") {
    //   value += 400;
    //   console.log("scroll prev", value);
    //   container.style.transform = `translateX(${ value }px)`;
    // }
  }
}

export default Slider