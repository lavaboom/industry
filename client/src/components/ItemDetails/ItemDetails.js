// React modules
import React from 'react'
// app styles & assets
import './ItemDetails.scss'

export default function ItemDetails({ item }) {
    return (
        <div>
            <div>{ item.content }</div>
        </div>
    )
}
