import React from 'react';
import Cgetapp from '../CgetApp/Cgetapp';
import axios from 'axios';
import { render } from '@testing-library/react';

export default class Capp extends React.Component {

    constructor(props) {
        super(props);

        this.state ={ token: null, isFetching: true, error: null, posts: [] };
    }

    componentDidMount() {
        fetch('https://gentle-escarpment-19443.herokuapp.com/v1/users/auth',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({
                email: 'user1@email.com',
                password: '!password!'
            })
        })
            .then(response => response.json())
            .then(result => {
                this.setState(prevState => ({...prevState, id: result.id, token:result.access_token, isFetching: false }))
            });
    }

    render() {
        const { token, id, isFetching } = this.state;
        if (isFetching) return <div>...Loading</div>;
        return (
            <div>
                <h1>{id + " " + token}</h1>
                <Cgetapp token={token}/>
            </div>
            )
    }    
}