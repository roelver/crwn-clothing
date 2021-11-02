import React from 'react';

import { signInWithGoogle } from '../../firebase/firebase';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './sign-in.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({ [name] : value});
    }

    render() {
        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your userid and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" 
                        value={this.state.email} handleChange={this.handleChange} required/> 
                    <FormInput type="password" name="password" label="Password" 
                        value={this.state.password} handleChange={this.handleChange} required/> 
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;
