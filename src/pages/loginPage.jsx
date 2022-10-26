import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import InputComponent from '../components/common/inputComponent';
import Form from '../components/common/form';
import axios from 'axios'

class LoginPage extends Form {
    state = {
        account: {
            username: '',
            password: ''
        },
        error: {
        }
    }

    validate = () => {
        let error = {}
        if (this.state.account.username.trim() == "") {
            error.username = 'username is required'
        }
        if (this.state.account.password.trim() == "")
            error.password = 'password is required' 
        return Object.keys(error).length == 0 ? "" : error
    }

    validateProperty = input => {
        
        if (input.name == "username") {
            if (input.value.trim() == "")
                return "username is required"
        }
        if (input.name == "password") {
            if (input.value.trim() == "")
                return "password is required"
            }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const error = this.validate();
        this.setState({ error: error })
        if(error){
            console.log(error)
            return
        }
        const login = await axios.post('http://localhost:5000/api/auth',this.state.account)
        if(login.data)
            alert('login succesfull')
    }

    render() {
        return (
            <div className='col-3 mx-auto my-5'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputComponent title="Username" type="text" name="username" error={this.state.error.username} onChange={this.handleChange} />
                    <InputComponent title="Password" type="password" name="password" error={this.state.error.password} onChange={this.handleChange} />
                    <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn btn-primary text-white">Submit</button>
                    <span>Not a Member? <Link to='/signup'>Sign-up</Link></span>
                    </div>
                    </form>
            </div>
        );
    }
}

export default LoginPage;