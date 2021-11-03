import React, { Component } from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './sign-up.scss';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try  {
            const { user } =  await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument( user, { displayName });

            this.setState({displayName: '', email: '', password: '', confirmPassword: ''});
        } catch(error) {
            console.error('An error occurred on creating the account:', error);
        }
    }

    handleChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({ [name] : value});
    }

    render() {
        return (
            <div className='sign-up'>
                <h2>I don't have an account</h2>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="displayName" name="displayName" label="Name" 
                        value={this.state.displayName} handleChange={this.handleChange} required/> 
                    <FormInput type="email" name="email" label="Email" 
                        value={this.state.email} handleChange={this.handleChange} required/> 
                    <FormInput type="password" name="password" label="Password" 
                        value={this.state.password} handleChange={this.handleChange} required/> 
                    <FormInput type="password" name="confirmPassword" label="Confirm Password" 
                        value={this.state.confirmPassword} handleChange={this.handleChange} required/> 
                    <div className='buttons'>
                        <CustomButton type="submit">Sign up</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;