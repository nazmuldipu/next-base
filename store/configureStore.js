import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import api from './middleware/api';
import logger from './middleware/logger';
import reducer from './reducer';

function ConfigureStore() {
    return configureStore({
        reducer,
        middleware: [
            logger({
                destination: 'Console'
            }),
            api
        ]
    })
}

export default ConfigureStore;