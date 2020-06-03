import React from 'react';
import axios from 'axios';
import './styles.scss'

export default class CgetApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://gentle-escarpment-19443.herokuapp.com/v1/articles',
            responseType: 'stream',
            headers: {
                'Authorization':
                    'Bearer ' + this.props.token,
            }
        })
        .then(result => this.setState({data: result.data}));
    }

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <div>
                {data && data.map(item => {
                    const {name, price, id, created_at, status} = item
                    return <div className="item">
                        <p>{id}</p>
                        <p>{name}</p>
                        <p>{price}</p>
                        <p>{status}</p>
                        <p>{created_at}</p>
                    </div>
                })}
            </div>  
            )
    }

}