import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    
  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/");
    let password = await req.json();

    console.log(password);
    setpasswordArray(password);
    
  };

  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  // Function to show toast when editing an entry
  const editText = (text) => {
    toast("Edited successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // Your edit logic here
  };

  // Function to show toast when deleting an entry
  const deleteText = (text) => {
    toast("Deleted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // Your delete logic here
  };
  
// ll 
  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("/icons/close-eye.svg")) {
      ref.current.src = "/icons/eye.svg.svg";
      passwordRef.current.type = " password";

    } else {
      ref.current.src = "/icons/close-eye.svg";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = async() => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      const newEntry = { ...form, id: uuidv4() };

      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);

       await fetch("http://localhost:3000/",{method:"DELETE", headers:{"CONTENT-TYPE":"application/json"},body:JSON.stringify({   id : uuidv4() })})

      let res = await fetch("http://localhost:3000/",{method:"POST", headers:{"CONTENT-TYPE":"application/json"},body:JSON.stringify({ ...form, id: uuidv4() })})
      // localStorage.setItem( 
      //   "password",
      //   JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      // );
      // console.log(...passwordArray, form);
      setform({ site: "", username: "", password: "" });
    } else {
      toast("Please fill all fields"), {};
    }
  };

  const deletePassword = async(id) => {
    console.log("deleting password with id", id);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
    let res = await fetch("http://localhost:3000/",{method:"DELETE", headers:{"CONTENT-TYPE":"application/json"},body:JSON.stringify({ ...form, id })})
    // localStorage.setItem(
    //   "password",
    //   JSON.stringify(passwordArray.filter((item) => item.id !== id))
    // );
  };

  const editPassword = (id) => {
    console.log("editing password with id", id);
    setform({...passwordArray.filter((item) => item.id === id)[0],id:id});
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div className=" md:myContainer  ">
        <h1 className="text-white text-center  text-4xl font-bold md:py-4">
          My Own Password Manager
        </h1>
        <div className="text-white flex flex-col  p-5 gap-5 items-center ">
          <input
            value={form.site}
            onChange={handlechange}
            placeholder="Enter Your URL or Website..."
            className="rounded-full text-black border border-yellow-400 w-full px-4 py-1"
            type="text"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row gap-8 w-full justify-between">
            <input
              value={form.username}
              onChange={handlechange}
              placeholder="Enter Your Username"
              className="rounded-full text-black border border-yellow-400 w-full px-4 py-1"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handlechange}
                placeholder="Enter Password"
                className="rounded-full text-black border border-yellow-400 w-full px-4 py-1 pr-10"
                type="password"
                name="password"
                id="password"
              />
              <span className="absolute right-1 border top-1 text-black cursor-pointer ">
                <img
                  className="w-6 h-6"
                  ref={ref}
                  onClick={showPassword}
                  src="/icons/eye.svg.svg"
                  alt="eye"
                />
                {/* <lord-icon
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="hover"
                  stroke="bold"
                  style={{ width: '27px', height: '27px', }} 
                ></lord-icon> */}
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex gap-3 justify-center  items-center  rounded-full w-fit px-4 py-1 border  bg-orange-500 hover:bg-orange-400 hover:font-bold"
          >
            <lord-icon
              src="https://cdn.lordicon.com/tsrgicte.json"
              trigger="hover"
              stroke="bold"
            ></lord-icon>
            Add Your Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="text-white text-xl text-center  font-bold p-3">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && (
            <div className="text-white text-center">No passwords to show</div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto text-white w-full p-3 overflow-hidden ">
              <thead className="bg-orange-600">
                <tr>
                  <th className="py-1 border">Site</th>
                  <th className="py-1 border">Username</th>
                  <th className="py-1 border">Password</th>
                  <th className="py-1 border">Action</th>
                </tr>
              </thead>
              <tbody className="bg-orange-50 text-black overflow-hidden">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" flex items-center justify-center py-1 border ">
                        <a href="{item.site}">{item.site}</a>
                        <div
                          className="cursor-pointer size-7"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            stroke="bold"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="  py-1 border  ">
                        <div className="flex items-center justify-center">
                          <span>{item.username}</span>
                          <div
                            className="cursor-pointer size-7"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              stroke="bold"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" flex items-center justify-center py-1 border">
                        <div className="flex items-center justify-center">
                          <span>{"*".repeat(item.password.length)}</span>

                          <div
                            className="cursor-pointer size-7"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              stroke="bold"
                            ></lord-icon>
                          </div>
                          <div
                            className="cursor-pointer size-7"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          ></div>

                          {/* <img src="/icons/close-eye.svg" alt="close-eye "  
                             /> */}
                        </div>
                      </td>
                      <td className="  py-1 border ">
                        <div className="flex items-center justify-center">
                          <span
                            className="cursor-pointer mx-1"
                            onClick={() => {
                              deletePassword(item.id);
                              confirm(
                                "are you sure you want to  delete your password"
                              );
                              setTimeout(() => {
                                alert("Deleted successfully :3");
                              }, 100);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/hwjcdycb.json"
                              trigger="hover"
                              stroke="bold"
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer mx-1"
                            onClick={() => {
                              editPassword(item.id);
                              confirm(
                                "are you sure you want to edit your password"
                              );
                              setTimeout(() => {
                                alert(" editing >_<");
                              }, 100);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/exymduqj.json"
                              trigger="hover"
                              stroke="bold"
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
