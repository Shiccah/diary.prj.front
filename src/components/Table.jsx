import React from 'react'
import {Table} from 'semantic-ui-react'

const TableCustom = (props) => (
    <Table padded>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Дата</Table.HeaderCell>
                <Table.HeaderCell>Заголовок</Table.HeaderCell>
                <Table.HeaderCell>Параметр</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                props.entry && props.entry.map(row => (
                    <Table.Row>
                        <Table.Cell>{row.dateTime}</Table.Cell>
                        <Table.Cell>{row.content}</Table.Cell>
                        <Table.Cell>параметр
                        </Table.Cell>
                    </Table.Row>))
            }
        </Table.Body>
    </Table>
);

export default TableCustom
