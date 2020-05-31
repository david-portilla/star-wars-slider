class Slider {
  constructor() {
    console.log('Slider.js')
    // call init method
    this.init()
  }

  init () {
    // fetch('./src/data/data.json')
    //   .then(res => res.json())
    //   .catch(error => console.error('Fetch Error:', error))
    //   .then(rulings => {
    //     this.addDataToDOM(rulings.data)
    //   });
    console.log('init Slider')

    // const loading = selectId('loading')
    // const nextBtn = selectId('js-next')
    // const prevBtn = selectId('js-prev')

    // // Event Listerners
    // nextBtn.addEventListener('click', controlDirection)
    // prevBtn.addEventListener('click', controlDirection)
    // // window.addEventListener('resize', reportWindowSize);
    // window.addEventListener('resize', updateCards)
    // window.addEventListener('resize', controlDirection)

    // let translateSlider = 0

    // // Load more animation
    // function showLoading (bol) {
    //   if (bol === true) {
    //     loading.classList.add("show");
    //   } else {
    //     loading.classList.remove("show");

    //   }
    // }

    // // Update cards width
    // function updateCards () {
    //   // console.log('updating cards')
    //   // console.log('List Width : ', Math.round(listContainer.clientWidth))
    //   // console.log('Card Width: ', Math.round(sliderContainer.clientWidth))
    //   let cardArr = selectAll('.c-card')
    //   for (let c = 0;c < cardArr.length;c++) {
    //     cardArr[ c ].style.width = `${ Math.round(sliderContainer.clientWidth) }px`
    //   }
    //   // TODO:
    //   // reset translateX dynamically
    //   // get the index of the current slide to update the amount of translateX
    //   // listContainer.style.transform = `translateX(${ 0 }px)`
    //   // translateSlider = 0
    // }

    // // Control direction of the slider
    // function controlDirection () {
    //   // console.log('translateSliderX : ', translateSlider)
    //   let cardWith = Math.round(sliderContainer.clientWidth)
    //   let listWith = Math.round(listContainer.clientWidth)
    //   let amountCards = Math.abs(listWith / cardWith)
    //   // let currentSlide = Math.round(listContainer.clientWidth / translateSlider)
    //   //  console.log('translateSlider : ', translateSlider)
    //   // console.log('currentSlide : ', Math.abs(currentSlide))
    //   // next movement
    //   if (this.id === 'js-next') {
    //     if (translateSlider <= -(listWith - cardWith)) {
    //       translateSlider = 0
    //     } else {
    //       translateSlider -= cardWith
    //     }
    //     listContainer.style.transform = `translateX(${ translateSlider }px)`
    //   }
    //   // previous movement
    //   else if (this.id === 'js-prev') {
    //     if (translateSlider >= -cardWith) {
    //       translateSlider = -(listWith - cardWith)
    //     } else {
    //       translateSlider += cardWith
    //     }
    //     listContainer.style.transform = `translateX(${ translateSlider }px)`
    //   }
    //   // if resize window
    //   else {
    //     // console.log('resize')
    //     // console.log('List Width : ', Math.round(listContainer.clientWidth))
    //     // console.log('Card Width: ', Math.round(sliderContainer.clientWidth))
    //     listContainer.style.transform = `translateX(${ translateSlider }px)`
    //   }

    //   console.log(listWith + translateSlider)
    //   // console.log(translateSlider)
    // }

    // // Generate random number between 0 - 9
    // function getRandomNumber (max, min) {
    //   return Math.floor(Math.random() * (max - min) + min);
    // }

    // // Fecth selected Item
    // const fetchItem = async (id) => {
    //   try {
    //     const url = `https://swapi.dev/api/${ id }/`;
    //     showLoading(true)
    //     const response = await fetch(url);
    //     let data = await response.json();

    //     // get all related movies
    //     for (let k = 0;k < data.results.length;k++) {
    //       let raletedMovies = await fetchRelatedMovies(data.results[ k ].films)
    //       data.results[ k ].films = raletedMovies
    //       // add objects in sequence and order
    //       // addDataToDOM(data.results[ k ])
    //     }
    //     let firstItemToDraw = getRandomNumber(data.results.length, 0)
    //     console.log('firstItemToDraw : ', firstItemToDraw)
    //     // addDataToDOM(data.results[ firstItemToDraw ])

    //     // add objects in parallel
    //     Promise.all(data.results).then(values => {
    //       let results = values
    //       // console.log(results)
    //       async function fetchRelated () {
    //         for (let k = 0;k < results.length;k++) {
    //           // let raletedMovies = await fetchRelatedMovies(data.results[ k ].films)
    //           // results[ k ].films = raletedMovies
    //           addDataToDOM(results[ k ])
    //           updateCards(results)
    //           showLoading(false)
    //         }
    //         // console.log(results)
    //       }
    //       fetchRelated()
    //     }).catch(function () {
    //       console.log('Promise.all failure!')
    //     })
    //   } catch (error) {
    //     console.log("Fetch Item Failed: ", error.message);
    //   }
    // }

    // // Fetch related movies from the Selected Item
    // async function fetchRelatedMovies (moviesURL) {
    //   let movieNames = []
    //   let filmObj = []
    //   let filmName = []
    //   try {
    //     for (let i = 0;i < moviesURL.length;i++) {
    //       filmObj[ i ] = await fetch(moviesURL[ i ]);
    //       filmName[ i ] = await filmObj[ i ].json();
    //       movieNames[ i ] = filmName[ i ].title;
    //     }
    //   } catch (error) {
    //     console.log("Fetch Related Movies Failed: ", error.message);
    //   }
    //   return movieNames;
    // }

    // // draw data
    // const addDataToDOM = async (data) => {
    //   let str = ''
    //   // remove empty or undefined keys
    //   function cleanParams (data) {
    //     for (const property in data) {
    //       // console.log(`${ property }: ${ data[ property ].length }`);
    //       if (data[ property ] !== ''
    //         && data[ property ] !== undefined
    //         && data[ property ].length > 0) {
    //         str += `<p class="c-card__info-text"> <i>${ property }: </i> ${ data[ property ] }</p>`
    //       }
    //     }
    //     return str
    //   }

    //   const cardElement = document.createElement("div");
    //   cardElement.classList.add("c-card");
    //   cardElement.innerHTML = `
    //   <div class="c-card__info">
    //     ${cleanParams(data) }
    //   </div>
    //   <br>
    //   `
    //   listContainer.appendChild(cardElement);
    // };

    // // call elemnto to draw
    // fetchItem("starships");
    // // fetchItem("vehicles");
    // // fetchItem("people");
  }
}

export default Slider