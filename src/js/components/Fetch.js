import { select, selectId } from '../helpers'
import Slider from './Slider'

/*eslint-disable */

class Fetch {
  constructor() {
    // console.log('Fetch.js')
    this.loading = selectId('loading')
    this.container = selectId('listContainer')

    // bind methods
    this.showLoading = this.showLoading.bind(this)

    // call init method
    this.init()
  }
  init () {
    // console.log('init Fetch')
    // create slider
    if (select('.c-slider')) {
      this.slider = new Slider()  // eslint-disable-line
    }
  }

  // fetch Data from SWAPI
  async fetchItem (id) {
    this.slider.resetValues()
    try {
      const params = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const url = `https://swapi.dev/api/${ id }/`;
      const response = await fetch(url, params);
      // console.log(response);
      const data = await response.json();

      // add items in order
      for (let k = 0;k < data.results.length;k++) {
        data.results[ k ].img = this.pullImages(data.results[ k ].name, id)
        this.addDataToDOM(data.results[ k ], k);
        data.results ? this.showLoading(false) : this.showLoading(true)
      }

      // set Max limit after finish adding data
      this.slider.setMaxLimit()

      // add items in parallel
      // Promise.all(data.results)
      //   .then((values) => {
      //     this.awaitMovies(values, id)
      //   })
      //   .catch(function () {
      //     console.log("Promise all failure!");
      //   });

    } catch (error) {
      console.log("Fetch Item Failed: ", error.message);
    }
  }

  // add image from folder
  pullImages (name, type) {
    if (type === 'vehicles') {
      return `/vehicles/${ name.replace(' ', '-') }`
    }
    if (type === 'starships') {
      return `/starships/${ name.replace(' ', '-') }`
    }
  }

  // drawing DATA into DOM
  addDataToDOM (data, id) {
    // console.log('data to add:', data)
    const cardElement = document.createElement("div")
    cardElement.id = `card-${ id }`
    cardElement.classList.add("c-card")
    cardElement.innerHTML = `
    <div class="c-card__image">
      <div class="c-card__overlay"></div>
      <img src="./src/img${data.img }.png" alt="${ data.name }">
    </div>

    <div class="c-card__info">
      <div class="c-card__info-wrapper">
        <h1 class="c-card__heading">${data.name }</h1>
        <ul class="c-card__categories">
          ${this.splitCategories(data.manufacturer) }
        </ul>
        <div class="c-card__stats">
          <div class="c-card__col">
            <div class="c-card__item">
              <span>passengers</span>
              <div class="c-card__item-number">
                <span>${data.passengers }</span>
                <p>persons</p>
              </div>
            </div>
            <div class="c-card__item">
              <span>cargo cap.</span>
              <div class="c-card__item-number">
                ${this.updateCargo(data.cargo_capacity) }
              </div>
            </div>
            <div class="c-card__item">
              <span>The crew</span>
              <div class="c-card__item-number">
                <span>${data.crew }</span>
                <p>persons</p>
              </div>
            </div>
          </div>

          <div class="c-card__col">
            <div class="c-card__velocity">
              <div class="c-card__velocity-number">
                <span>${data.max_atmosphering_speed.replace('km', '') }</span>
                <p>km/h</p>
              </div>
              <p>Max speed</p>
            </div>
          </div>

        </div>

        <div class="c-card__cart">
          <div class="c-card__cart-price">
            ${this.updatePrice(data.cost_in_credits) }
          </div>
          <button class="c-card__cart-cta">
            add to cart
          </button>
        </div>

      </div>
    </div>
      `;
    this.container.appendChild(cardElement);
  }

  // Remove previous results
  resetDOM () {
    this.container.innerHTML = ``
    this.container.style.removeProperty('transform')
  }

  // Split each category
  splitCategories (data) {
    data = data.split(',')
    let res = []
    for (let k = 0;k < data.length;k++) {
      res[ k ] = `<li><a href="/">${ data[ k ] }</a></li>`
    }
    return res.join('');
  }

  // Set dollar format
  updatePrice (data) {
    let price = parseInt((data / 1000)).toLocaleString()
    return data === 'unknown' ? 'Free' : '$' + price
  }

  // Set cargo cap format
  updateCargo (data) {
    let cargo = data / 1000
    return isNaN(cargo) ? 'unknown' : `<span>${ cargo }</span> <p>m³</p>`
  }

  // Show loading animation
  showLoading (bol) {
    if (bol === true) {
      this.loading.classList.add("show");
    } else {
      this.loading.classList.remove("show");
    }
  }

  // await each related movie
  async awaitMovies (results, type) {
    try {
      for (let k = 0;k < results.length;k++) {
        results[ k ].films = await this.fetchRelatedMovies(results[ k ].films)
        results[ k ].img = this.pullImages(results[ k ].name, type)
        this.addDataToDOM(results[ k ], k);
        // results ? this.showLoading(false) : this.showLoading(true)
      }
      // when finish adding data
      this.slider.setMaxLimit()
      console.log('slider.setMaxLimit()')
    } catch (error) {
      console.log("Awaiting Movies Failed: ", error.message);
    }
  }

  // fecth related movies for each Item
  async fetchRelatedMovies (moviesURL) {
    let movieNames = [];
    let filmObj = [];
    let filmName = [];
    try {
      for (let i = 0;i < moviesURL.length;i++) {
        filmObj[ i ] = await fetch(moviesURL[ i ]);
        filmName[ i ] = await filmObj[ i ].json();
        movieNames[ i ] = filmName[ i ].title;
      }
    } catch (error) {
      console.log("Fetch Related Movies Failed: ", error.message);
    }
    return movieNames;
  }

}

export default Fetch

/*eslint-enable */