import React, { Component } from 'react';
import Menu from '../../components/Menu';
import { Container, Card, Form, Button } from 'semantic-ui-react';
import DevTools from "../../containers/DevTools";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../../actions/diary';
import TableCustom from '../Table'


@connect(
    store => ({
        state: store.diary,
    }),
    dispatch => ({
        actions: {
            ...bindActionCreators(bookActions, dispatch)
        },
    }),
)
class App extends Component {
    componentDidMount() {
        const { requestEntrys } = this.props.actions;

        requestEntrys();
    }

    render() {
        const { entry } = this.props.state;
        console.log(entry);
        return (
            <Container>
                { process.env.NODE_ENV == 'development' &&
                <div className={DevTools}>
                    <DevTools/>
                </div>}
                <Menu />
                <TableCustom
                    entry={entry}
                />
                {/*<Form reply>*/}
                    {/*<Form.TextArea />*/}
                    {/*<Button content='Add Reply' labelPosition='left' icon='edit' primary />*/}
                {/*</Form>*/}
            </Container>
        );
    };
}

export default App;
