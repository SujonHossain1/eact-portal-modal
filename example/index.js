import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import BasicModal from './BasicExample';
import CustomStyleModal from './CustomModal';

const App = () => {
    return (
        <div>
            <BasicModal />
            <CustomStyleModal />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
