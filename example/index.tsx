import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import Example from './Example';

const App = () => {
    return (
        <div>
            <Example />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
