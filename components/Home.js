import React from 'react';
import enjoyCodingAction from '../actions/enjoyCodingAction';

class Home extends React.Component {

    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.context.executeAction(enjoyCodingAction);
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>

                <div style={{textAlign: 'center'}}>
                    <button className="pure-button" disabled={this.props.enjoyCoding} onClick={this.handleClick}>
                      Enjoy JS ?
                    </button>

                    { this.props.enjoyCoding &&
                      <div>Welcome to JS world ヽ(◉◡◔)ﾉ</div>
                    }
                </div>
            </div>
        );
    }
}

export default Home;
