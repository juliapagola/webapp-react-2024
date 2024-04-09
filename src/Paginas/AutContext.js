import React from 'react';

const AutContext = React.createContext(
    {
        login: false,
        userID: ''
    }
);

export default AutContext;