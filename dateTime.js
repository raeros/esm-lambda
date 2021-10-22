import moment from 'moment'
import yesterday from './yesterday';

export class dateTime {

    today() {
      return moment().format('MMM Do YYYY')
    }

    yesterday(){
      return yesterday()
    }
}