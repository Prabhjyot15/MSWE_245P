import { useRef, useState } from "react";
import './Form.css';


const Form = (props) => {

    // refs
    const usernameRef = useRef();
    const passwordRef = useRef();

    // states
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
        const formData = {
            username: usernameRef.current.value, // we are accessing the value of the input field through the ref's current instance
            password: passwordRef.current.value,
        };
        console.log(formData)
        console.log(e)
        props.onSubmit(formData); // upon submission we are calling the onSubmit function
    };

    const handleUsernameChange = (event) => {
        setUsernameValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    Username:
                    <input ref={usernameRef}
                        label="username"
                        id="username"
                        type="text"
                        value={usernameValue}
                        onChange={handleUsernameChange} />
                    Password:
                    <input ref={passwordRef} label="password" id="password-input" type="password"
                        value={passwordValue} onChange={handlePasswordChange} />
                    <button
                        id="login-button"
                        type="submit"
                    >
                        submit
                    </button>
                </form>
            </div></div>
    );
}

export default Form;
