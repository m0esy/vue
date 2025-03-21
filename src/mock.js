import Mock from 'mockjs'
const Random =Mock.Random

const userData = () =>{
    let users = []
    for (let i = 0; i < 10; i++) {
      let user = {
        'id': i + 1,
        'date': Random.date('yyyy-MM-dd'),
        'name': Random.cname(),
        'address': Mock.mock('@county(true)'),
        'phone': Mock.mock(/^1[0-9]{10}$/),
        'status': Random.integer(0, 1)
      }
      users.push(user)
    }
    return users
  

}
Mock.mock('/api/user',userData)