import React from 'react';
import { withRouter } from 'react-router';

const TempPage = ({history}) => {
    console.log('Hist:', history);
    return (
        <div>
            <h1>DETAILS FOR {history.location.pathname}</h1>      
        </div>
    )
};

export default withRouter(TempPage);