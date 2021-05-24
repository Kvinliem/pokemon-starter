import React from 'react'
import Pokedex from './pokedex'
import {data} from '../data/pokemon-data'

const Main = () => {

    return (
        <>
            <div class='main'>
                <Pokedex data={data} />
            </div>

        </>
    )
}

export default Main;