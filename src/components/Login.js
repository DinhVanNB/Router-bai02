import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'

function Login() {
    let [account, setAccount] = useState({});
    useEffect(()=>console.log(account),[account]);
    let navigate  =  useNavigate();
    const sendDataToAcount= () =>{
            navigate("/loginSuccess",{state:{...account}} );
    };
    const onLogin = ()=>{
         if(account.Id==="admin@gmail.com" && account.Password ==="letmein" && window.confirm('Đăng Nhập Thành Công!!!')){
            sendDataToAcount();
         }
         else{
            window.confirm('Đăng Nhập Không Thành Công!!!')
         }
    }
    const onChange =e =>{
        setAccount(pre=>{return {...pre,[e.target.name]:e.target.value}});
    }

    return (
        <>
            <h2>Form Login:</h2>
            <label>Id:</label>
            <input style={{marginLeft:"58px"}} name="Id" type="text" onChange={e=> onChange(e)}/>
            <br></br>
            <label>Password: </label>
            <input name="Password" type="password" onChange={e=> onChange(e)}/>
            <br></br>
            <button onClick= {onLogin}>Login</button>
        </>
    );
}
export default Login;