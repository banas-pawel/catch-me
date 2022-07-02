import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {
    addDoc, getDocs, setDoc
} from "firebase/firestore";
import {usersCollectionRef} from "../Firestore/userCollection";
import {getId} from "../Firestore/userCollection";
import {useEffect} from "react";


export const Login = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef).then(res => {
                const usr = res.docs.map(doc => ({...doc.data(), id: doc.id}))
                setUsers(usr)
            }).catch(err => console.log(err));
        }
        getUsers();
    }, []);
    useEffect(() => {
        console.log(users)
    }, [users])

    const handleChange = (event) => {
        setUsers(event.target.value);
    }

    let history = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (users === "") {
            return
        }
        history(`/game`);
        const addUsername = async () => addDoc(usersCollectionRef, {name: users}).then(res => console.log(res)).catch(err => console.log(err));
        addUsername();



        getId()

    }
    return (
        <div className="bg-background bg-cover flex w-screen h-screen justify-center items-center">
            <div className="bg-amber-700 font-bold border-8 shadow-lg border-gray-900 p-10">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        Tell us your nickname:
                        <input type="text" id="name" name={users} onChange={handleChange}
                               placeholder="Your NICKNAME"
                               className="bg-gray-900 text-white ml-5 p-3 rounded-xl"/>
                    </label>
                    <input type="submit" value="Submit"
                           className="bg-gray-900 ml-10 text-white rounded-xl p-3 px-8 cursor-pointer hover:bg-amber-700 hover:text-gray-900 border-2 border-gray-900"/>
                </form>
            </div>
        </div>
    );
}