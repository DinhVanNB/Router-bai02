import {useParams, useLocation} from 'react-router-dom';
import {useState} from 'react';

function Employee() {
    let [isShow, setShow] = useState(-1);
    let {state} = useLocation();
    let a = [];
    for(let  x in state){
        a.push(state[x])
    }
    const onShow= (e) =>{
        setShow(prev=>{ if(+prev===+e.target.id){
            return prev=-1;
        }
        else {
            return  prev = e.target.id   
        }})
    }
    let {Id} = useParams();
    let dataEmploy = a.map((employ,index)=>{
               return( <tr key={employ.id}>
               <td>{index}</td>
               <td>{employ.name} </td>
               <td>{+isShow===+employ.id? employ.age :'' }</td>
               <td><button id={employ.id} onClick={onShow}>Show</button></td>
           </tr> );
            })
    return (
        <div>
            <h3>Chào mừng {Id} </h3>
            <br></br>
            <h5>Danh sách nhân sự:</h5>
            <table>
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Họ Tên</td>
                        <td>Tuổi</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {dataEmploy}
                </tbody>
            </table>
        </div>
    );
}
export default Employee;