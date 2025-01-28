import { useState } from 'react';
import { authService } from "@/fbase.jsx"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onChange = (event) => {
        // 분해
        const {
            target: {name, value},
        } = event
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        let data;
        try {
            if (newAccount) {
                data = await createUserWithEmailAndPassword(authService, email, password);
            } else {
                data = await signInWithEmailAndPassword(authService, email, password);
            } 
            console.log(data);
        } catch (error) {
            setError(error.message);
        }

    }

    return (  
        <>
            <form onSubmit={onSubmit} className="container">
                <input 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={email}
                    onChange={onChange}
                    className="authInput"
                />
                <input 
                    name="password"
                    type="password" 
                    palceholder="Password" 
                    required
                    value={password}
                    onChange={onChange}
                    className="authInput"
                />
                <input 
                    type="submit" 
                    value={newAccount ? "Create Account" : "Log In"}
                    className="authSubmit authInput"
                />
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">
                {newAccount ? "Sign In" : "Create Account"}
            </span>        
        </>
    );
}
 
export default AuthForm;