import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
    return (
        <div>
            <h1>Sign Up</h1>
            <div className="col-4">
                <input title="username" placeholder="username" className="form-control m-2" value={user.username} onChange={(e) =>
                    setUser({ ...user, username: e.target.value })} />
                <input title="password" placeholder="password"  className="form-control m-2" value={user.password} onChange={(e) =>
                    setUser({ ...user, password: e.target.value })} />
                <button className="btn btn-primary" onClick={signup}> SignUp </button>
            </div>
        </div>
    );
}
