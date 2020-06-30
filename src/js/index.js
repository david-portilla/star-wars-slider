import { select } from './helpers'
import Fetch from './components/Fetch'
import Select from './components/Select'

/*eslint-disable */
if (select('.c-slider')) {
  let pullData = new Fetch()
}

// create custom select
if (select('.c-select')) {
  let customSelect = new Select()
}
/*eslint-enable */
