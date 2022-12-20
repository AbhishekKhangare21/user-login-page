import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";

import { useState } from "react";
import { async } from "@firebase/util";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);
  const [data, setData] = useState({
    name: null,
    phone: null,
    email: null,
    address: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("res", res);

      const storage = getStorage();
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: name,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group m-1 ">
        <label> Full Name </label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>

      <div className="form-group m-1 ">
        <label> Phone Number </label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
      </div>

      <div className="form-group m-1 ">
        <label> Email </label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>

      <div className="form-group m-1 ">
        <label> Address </label>
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />
      </div>

      <div className="form-group m-1 ">
        <label>Password </label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>

      <button className="btn m-1 mt-3 btn-primary w-100">Sign In </button>
      {err && <span style={{ color: "red" }}>something went wrong</span>}
    </form>
  );
};

export default Register;
