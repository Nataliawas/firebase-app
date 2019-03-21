import React from 'react'
import { Container, Button, Form } from 'semantic-ui-react'
import db from './firebase'

class UserForm extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    age: null
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    function uuid() =Math.random()

    const uid = uuid()

    db.ref('users/' + uid).set({
      username: event.name,
      email: event.email,
      age: event.age
    });
  }


  render() {
    return (
      <Container>
        <h4>Add new user: </h4>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' name="firstName" type="text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' name="lastName" type="text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Age' name="age" type="number" onChange={this.handleChange} />
          </Form.Field>
          <Button className="btn waves-effect waves-light btn-floating pulse" type="submit" name="action" onClick={this.handleSubmit}>
            <i className="material-icons right">send</i></Button>
        </Form >
      </Container>
    )
  }
}


export default UserForm