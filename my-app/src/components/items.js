/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import pokeball from '../data/images/pokeball.svg'
const Items = ({no, name, type, photo, height, weight, description}) => {

    return (
        <>
            <div class='items'>
                <div class='item-title'>
                    <img src={pokeball} class='pokeball' height='30px' width='30px'/>
                    <span class='item-title-span'>
                        {no} - {name}
                    </span>
                </div>
                <div class='item-image'><img src={photo} height='250px' width='270px'/></div>
                <div class='item-content'>
                    <div class='item-content-value mt-5'>Type</div> 
                    <div class='item-content-value type'>
                            <span class={type==='fire' ? 'type-icon type-fire' : type==='grass' ? 'type-icon type-grass' : 'type-icon type-water'} > {type}</span> 
                    </div>
                </div>
                <div class='item-content'>
                    <div class='item-content-value'>Weight</div> 
                    <div class='item-content-value'>{weight}</div>
                </div>
                <div class='item-content'>
                    <div class='item-content-value'>Height</div>
                    <div class='item-content-value'>{height} </div>
                </div>
                <div class='item-description'> "{description}" </div>
            </div>
        </>
    )
}

export default Items;