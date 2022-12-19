import _ from 'lodash'

const data = [
  {
    username: 'diego',
    role: 'admin',
  },
  {
    username: 'angie',
    role: 'seller',
  },
  {
    username: 'dulce',
    role: 'seller',
  },
  {
    username: 'kira',
    role: 'customer',
  },
  {
    username: 'flor',
    role: 'customer',
  }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)
