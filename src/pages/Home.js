// import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getUserData } from '../data/user'

export default function Home() {

    const getData = async () => {
        try {
            const data = await getUserData()
            console.log("🚀 ~ file: Home.js:9 ~ getData ~ data", data)
        } catch (err) {
            console.log("🚀 ~ file: Home.js:11 ~ getData ~ err", err)
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>Home</div>
    )
}


