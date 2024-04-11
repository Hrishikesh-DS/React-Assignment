import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "", password: "", firstName: "", lastName: "", role: "USER"
    });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account/Profile");
    };
    const signup = async () => {
        navigate("/Kanbas/Account/Signup");
    };
    return (
        <div>
            <h1>Sign In</h1>
            <div className="float-end">
                <button className="btn btn-primary" onClick={signup}>Sign Up</button>
            </div>
            <div className="col-4">
                <input  title="username" placeholder="username"  className="form-control m-2" value={credentials.username} onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })} />
                <input  title="password" placeholder="password" className="form-control m-2" value={credentials.password} onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })} />
                <button className="btn btn-primary" onClick={signin}> Signin </button>
            </div>
        </div>
    );
}

