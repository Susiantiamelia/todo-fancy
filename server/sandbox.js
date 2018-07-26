const jwt = require('jsonwebtoken')
const key = process.env.SECRET_KEY;

let coba = jwt.sign({amel: 'try'}, 'key')

let anything =jwt.verify('hasndkd', 'key')

console.log(anything)

delTodo (id) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then(result => {
      if (result.value) {
        axios.delete(`http://localhost:3000/users/todos/delete/${id}`)
        .then(success => {
          swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
          )
        })
        .catch(err => {
          swal({
              title: `${err.message}`,
              type: "error",
          });
        })
      }
    })
  }
}