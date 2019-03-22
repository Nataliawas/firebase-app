import React from 'react'
import { Container, Table } from 'semantic-ui-react'
import { db } from './firebase'

class UserTable extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        db.ref('users/').on("value", snapshot => {
          const users = []
          Object.entries(snapshot.val()).forEach(elem => {
            const user = {
              id: elem[0],
              ...elem[1]
            }
            users.push(user)
          })
          this.setState({ users })
        })
      }


    render() {
        return (
            <Container>
                < Table celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Age</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.users.map(user => (
                            <Table.Row key={user.id}>
                                <Table.Cell>{user.firstName}</Table.Cell>
                                <Table.Cell>{user.lastName}</Table.Cell>
                                <Table.Cell >{user.age}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table >
            </Container>
        )
    }
}

export default UserTable