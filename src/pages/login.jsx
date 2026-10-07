import { useState, useContext } from "react";
import { AuthContext } from "../context/authcontext"
import { useNavigate } from "react-router";

function Login() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const correctEmail = "moviee@gmail.com";
    const correctPassword = "78945612"

    const { setUser } = useContext(AuthContext);
    
    function handelSubmit(e) {
        e.preventDefault();

        if (name.trim() === "") {
            setError("please enter name");
            return
        }
        if (email.trim() === "") {
            setError("please enter email");
            return
        }
        if (email !== correctEmail) {
            setError("email invalid");
            return
        }
        if (password.trim() === "") {
            setError("please enter password");
            return
        }
        if (password !== correctPassword) {
            setError("password invalid");
            return
        }




        setError("");

        setUser({
            name: name,
            email: email
        })
        navigate("/")

       localStorage.setItem("user", JSON.stringify({ name:name, email:email}));
    }

    function handelName(e) {
        setName(e.target.value)
    }

    function handelEmail(e) {
        setEmail(e.target.value)
    }

    function handelPassword(e) {
        setPassword(e.target.value)
    }


    return (
        <div className="text-neutral-50">
            <form onSubmit={handelSubmit} className="flex flex-col justify-center items-center xl:pt-32 pt-30 sm:pt-20 sm:gap-8 gap-6" >
                <h1 className="lg:text-4xl sm:text-3xl text-xl sm:pb-1 pb-2 font-bold">Welcome to Movie<span className="text-[#CF900C]">e</span></h1>
                <p className="text-amber-500">{error}</p>
                <input type="text" placeholder="name" value={name} onChange={handelName} className="border border-[#cf910c60] sm:pt-3 sm:pb-4 pb-3 pt-2 rounded-xl pl-3 lg:pr-40 sm:pr-35 pr-12 outline-none" />
                <input type="email" placeholder="email" value={email} onChange={handelEmail} className="border border-[#cf910c60] sm:pt-3 sm:pb-4 pb-3 pt-2 rounded-xl pl-3  lg:pr-40 sm:pr-35 pr-12  outline-none"/>
                <input type="password" placeholder="password" value={password} onChange={handelPassword} className="border border-[#cf910c60] sm:pt-3 sm:pb-4 pb-3 pt-2 rounded-xl pl-3  lg:pr-40 sm:pr-35 pr-12  outline-none" />
                <div>
                    <button type="submit" className=" pt-2 pb-3 lg:px-15 sm:px-13 px-10 bg-[#cf910c4b] rounded-full sm:text-lg text-sm mt-5 cursor-pointer text-neutral-50 hover:bg-[#CF900C] font-semibold">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;