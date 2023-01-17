import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { addUser, deleteUser, getAllUsers } from '../data/user';
function AddUser(props) {
  const [userData, setuserData] = useState({ name: '', mobile: '', address: '', password: '' });
  const [refresh, setRefresh] = useState(false);

  const submitUserData = async () => {

    try {
      let body = { ...userData }
      const result = await addUser(body);
      if (result) {
        console.log("result==> ",result.result[0])
        alert(result.message)
        setRefresh(!refresh)
      } else {
        alert(result.message)
        setRefresh(!refresh)
      }
    } catch (err) {
      alert(JSON.stringify(err))
    }
    // }
    // setRefresh(!refresh)
  }

  console.log("userData is ", userData)

  const saveData = (e, key) => {
    setuserData((p) => { return { ...p, [key]: e.target.value } })
  }

 

  return (
    <div className='mainView' >
      <div className='childBox1'>
        {/* form below=============== */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <h3>Add User</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          {/* <form onSubmit={submitUserData} > */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: 30, border: '2px solid', borderRadius: 10, }} >
            <label>
              User Name:
            </label>
            <input style={{ width: 300 }} type="text" name="name" onChange={(e) => saveData(e, 'name')} />
            <label>
              Mobile
            </label>
            <input style={{ width: 300 }} type="text" name="mobile" onChange={(e) => saveData(e, 'mobile')} />
            <label>
              Address
            </label>
            <input style={{ width: 300 }} type="text" name="address" onChange={(e) => saveData(e, 'address')} />
            <label>
              Pasword
            </label>
            <input style={{ width: 300 }} type="text" name="address" onChange={(e) => saveData(e, 'password')} />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }} >
              <Button onClick={submitUserData} variant="outline-success" >Submit</Button>
              <Button variant="outline-success" ><a href='/'>Login</a></Button>
            </div>
            
          </div>
          {/* </form> */}
        </div>
        {/* form above=============== */}
      </div>
      
    </div>
  );
}
export default AddUser;
