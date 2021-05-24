import React from 'react'
import Items from './items'
import '../App.css'
const Pokedex = ({data}) => {

    return (
        <>
            <div class='pokedex'>
                {data.map((item, idx) => {
                    return (
                        <Items 
                            key={idx} 
                            no={item.no}
                            name={item.name} 
                            type={item.type}
                            photo={item.photo}
                            height={item.height}
                            weight={item.weight}
                            description={item.description}
                            class='items'
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Pokedex;