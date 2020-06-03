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
            <table border="1">
                <div>
                    <td class="first_td"><p>id</p></td>
                    <td class="first_td"><p>name</p></td>
                    <td class="first_td"><p>price</p></td>
                    <td class="first_td"><p>status</p></td>
                    <td class="first_td"><p>created_at</p></td>
                </div>
                {data && data.map(item => {
                    const {name, price, id, created_at, status} = item
                    return <div className="item">
                            <tr>
                                <td><p>{id}</p></td>
                                <td><p>{name}</p></td>
                                <td><p>{price}</p></td>
                                <td><p>{status}</p></td>
                                <td><p>{created_at}</p></td>
                            </tr> 
                    </div>
                })}
            </table> 
            )
    }

}