// React modules
import React, { Component } from 'react'
// app styles & assets
import './ItemDetailsPage.scss'
// other sub components
import ItemDetails from '../../components/ItemDetails/ItemDetails'
import axios from 'axios'

export default class ItemDetailsPage extends Component {

    // static variables 
    apiURL = process.env.REACT_APP_API_URL || 'http://localhost:8080'

    temp = process.env.REACT_APP_API_URL

    state = {
        item: {},
        isLoading: true
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        axios.get(`${this.apiURL}/item/${id}`)
            .then(response => {
                this.setState({
                    item: response.data,
                    isLoading: false
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        if (this.isLoading) return <></>
        return (
            <div>
                <p>This is ItemDetails page</p>
                <ItemDetails item = { this.state.item } />
            </div>
        )
    }
}
