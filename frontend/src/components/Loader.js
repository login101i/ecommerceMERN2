import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner
            animation='grow'
            role='status'
            variant='secondary'
            style={{
                width: '100px',
                height: '100px',
                margin: 'auto',
                display: 'block',
                position:'absolute',
                top:'45%',
                left:'45%',
                
            }}
        >
            <span className='sr-only'>Loading...</span>
        </Spinner>
    )
}

export default Loader
