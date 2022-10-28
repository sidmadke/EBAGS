import React from 'react';
import InputComponent from '../components/common/inputComponent';
import Form from '../components/common/form';
import axios from 'axios'

class RegisterPage extends Form {
    state = {
        account: {
            email: '',
            username: '',
            password: ''
        },
        error: {
        }
    }

    validate = () => { 
        let error = {}
        if (this.state.account.email.trim() == "") {
            error.username = 'email is required'
        }
        if (this.state.account.username.trim() == "") {
            error.username = 'username is required'
        }
        if (this.state.account.password.trim() == "")
            error.password = 'password is required'
        return Object.keys(error).length == 0 ? "" : error
    }

    validateProperty = input => {

        if (input.name == "email") {
            if (input.value.trim() == "")
                return "email is required"
        }
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
        // console.log(await axios.post('http://localhost:5000/api/users',this.state.account))
        
            const response = await axios.post('http://localhost:5000/api/users',this.state.account)
            alert(response.data)
        }

    render() {
        return (
            <div className='col-3 mx-auto my-5'>
                <h1 className='text-center'>Sign-up</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputComponent title="E-mail" type="text" name="email" error={this.state.error.email} onChange={this.handleChange} />
                    <InputComponent title="Username" type="text" name="username" error={this.state.error.username} onChange={this.handleChange} />
                    <InputComponent title="Password" type="password" name="password" error={this.state.error.password} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-contact bg-warning">Submit</button>
                </form>
            </div>
        );
    }
}

export default RegisterPage;