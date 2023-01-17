import React, { useEffect, useState } from 'react'
import { deleteUser, getAllUsers } from '../data/user';

export default function UserList(props){

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            const result = await getAllUsers()
            setUserList(result.result)
        } catch (err) {
            console.log("🚀 ~ file: UserList.js:16 ~ getUserData ~ err", err)
        }
    }

    const deleteUsers = async (userId) => {
        const result = await deleteUser(userId)
        if (result) {
            alert('user deleted successfully')
        }

    }

    return (
        <div className='childBox1 childBox2'>
            <h3 style={{ textAlign: 'center' }} >Users List</h3>
            <div style={{ display: 'flex', width: '87%', flexWrap: 'wrap', maxHeight: '300px', overflow: 'scroll', justifyContent: 'flex-start', alignContent: 'flex-start', gap: '8px', }} >
                {
                    userList.map((i, index) => {
                        // { backgroundColor: 'lightblue', border: '1.5px solid yellow', padding: 7,marginTop:5,width:'280px',borderRadius:12 }
                        return (
                            <div className='box' key={index}>
                                <p style={{ lineHeight: 0.3, marginTop: 8, fontSize: '12px', fontWeight: '500' }} >UserName: {i.name}</p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: -5, }} >
                                    <p style={{ lineHeight: 0.5, fontSize: '12px', fontWeight: '500' }} >Mobile: {i.mobile}</p>
                                    {/* <FontAwesomeIcon icon={'trash'} /> */}
                                    {/* <FontAwesomeIcon icon="fa-thin fa-trash" /> */}
                                    <p style={{ cursor: 'pointer', lineHeight: 0.3, }} onClick={() => deleteUsers(i.id)} >delete</p>
                                </div>
                                <p style={{ lineHeight: 0.3, fontSize: '12px', fontWeight: '500', marginTop: -5 }} >Address: {i.address}</p>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}
