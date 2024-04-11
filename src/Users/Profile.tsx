
import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "", password: "",
    firstName: "", lastName: "", dob: "", email: "", role: "USER"
  });
  const navigate = useNavigate();
  // const fetchProfile = async () => {
  //   const account = await client.profile();
  //   setProfile(account);
  // };
  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        // Redirect the user to the sign-in page if not authenticated
        navigate("/Kanbas/Account/Signin");
      } else {
        // Handle other errors
        console.error("Error fetching profile:", error);
      }
    }
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <div className="col-1 m-2">
        <Link to="/Kanbas/Account/Admin/Users"
          className="btn btn-warning w-100">
          Users
        </Link>
      </div>
      {profile && (
        <div className="col-6">
          <input title="username" placeholder="username" className="form-control m-2" value={profile.username} onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })} />
          <input title="password" placeholder="password" className="form-control m-2" value={profile.password} onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })} />
          <input title="firstName" placeholder="firstName" className="form-control m-2" value={profile.firstName} onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })} />
          <input title="lastName" placeholder="lastName" className="form-control m-2" value={profile.lastName} onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })} />
          <input title="dob" placeholder="dob" className="form-control m-2" value={profile.dob} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })} />
          <input title="email" placeholder="email" className="form-control m-2" value={profile.email} onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })} />
          <select className="form-select m-2" value={profile.role} onChange={(e) =>
            setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button className="btn btn-primary m-2" onClick={save}>Save</button>
      <button className="btn btn-danger m-2" onClick={signout}>Signout</button>
    </div>
  );
}
