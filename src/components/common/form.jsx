import { Component } from 'react'
import axios from 'axios'

class Form extends Component { 
    // handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const error = this.validate();
    //     this.setState({ error: error })
    //     if(error){
    //         console.log(error)
    //         return
    //     }
    //     await axios.post('http://localhost:5000/api/users',this.state.account)   
    // }

    handleChange = e => {
        let temp = { ...this.state.account }
        temp[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account: temp })

        let error = {...this.state.error}
        let errorMessage = this.validateProperty(e.currentTarget);
        if(e.currentTarget) error[e.currentTarget.name]=errorMessage
        else delete error[e.currentTarget]
        this.setState({ error })
    }
    render() { 
        return (null);
    }
}
 
export default Form;