import React from 'react'
import { Container, Label, Table } from 'semantic-ui-react'

class UserTable extends React.Component {

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
                        <Table.Row>
                            <Table.Cell>
                                <Label ribbon>cell</Label>
                            </Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table >
            </Container>
        )
    }
}

export default UserTable