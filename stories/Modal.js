import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from '../src/Modal';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    handleClose() {
        action('Close')();

        this.setState({
            isOpened: false
        });
    }

    handleOpen() {
        this.setState({
            isOpened: true
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={this.handleOpen.bind(this)}>Open</button>
                <Modal
                    isOpen={this.state.isOpened}
                    onClose={this.handleClose.bind(this)}
                    staticModal={this.props.staticModal || false}
                    className={this.props.className}
                >
                    {this.props.children}
                </Modal>
            </div>
        );
    }
}

storiesOf('Modal', module)
    .add('Controlled (with a wrapper)', () =>
        <Wrapper>
            <h1>I'm a modal!</h1>
        </Wrapper>
    )
    .add('Controlled with static overlay', () =>
        <Wrapper
            staticModal={true}
        >
            <h1>I'm a modal!</h1>
        </Wrapper>
    )
    .add('Bootstrap style', () =>
        <Wrapper
            modalClass="modal-dialog"
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">I'm a title</h4>
                </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-default">Cancel</button>
                    <button className="btn btn-primary">Send</button>
                </div>
            </div>
        </Wrapper>
    );