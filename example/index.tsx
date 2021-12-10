import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import BasicExample from './BasicExample';

const App = () => {
    return (
        <div>
            <BasicExample />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
