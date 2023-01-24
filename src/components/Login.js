import { useNavigate } from "react-router-dom";
import {useState} from 'react'
const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

function Login() {
    let [account, setAccount] = useState({});
    let navigate  =  useNavigate();
    const sendDataToAcount= () =>{
            navigate(`/loginSuccess/${account.Id}`, {state:{...employees}});
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
        <div>
            <h2>Form Login:</h2>
            <label>Id:</label>
            <input style={{marginLeft:"58px"}} name="Id" type="text" onChange={e=> onChange(e)}/>
            <br></br>
            <label>Password: </label>
            <input name="Password" type="password" onChange={e=> onChange(e)}/>
            <br></br>
            <button onClick= {onLogin}>Login</button>
        </div>
    );
}
export default Login;