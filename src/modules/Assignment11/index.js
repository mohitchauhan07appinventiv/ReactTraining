import React from 'react'
import Counter from './screens/counter'
import {Provider} from 'react-redux'
import store from './store/store'

function Assignment11() {
    return (
        <Provider store={store}>
         <Counter/>   
        </Provider>
    )
}

export default Assignment11
