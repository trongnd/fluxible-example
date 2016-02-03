import React from 'react';
import { NavLink } from 'fluxible-router';

const TAGS = [
    'JS',
    'ES6/7',
    'React',
    'Fluxible',
    'Isomorphic'
]

class Hello extends React.Component {
    getHelloMessage(message) {
        if (message) {
            return <span>Welcome, <b>{message}</b></span>;
        } else {
            return (<i>Happy Coding ヽ(◉◡◔)ﾉ</i>);
        }
    }

    render() {
        const helloMessage = this.getHelloMessage(this.props.helloMessage);

        return (
            <div>
                <h2>Hello</h2>
                <p>{helloMessage}</p>

                <ul>
                  { TAGS.map(tag =>
                    <li key={tag}>
                      <NavLink routeName='hello' navParams={{message: tag}}>{tag}</NavLink>
                    </li>
                  )}
                </ul>
            </div>
        );
    }
}

export default Hello;
