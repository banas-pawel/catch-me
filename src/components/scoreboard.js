import React from "react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDocs} from "firebase/firestore";
import {usersCollectionRef} from "../Firestore/userCollection";

export const Scoreboard = () => {
    let history = useNavigate();
    const handleSubmitnewgame = () => {
        history(`/`);
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id, name: doc.data().name})));
        }
        getUsers();
    }, []);

    return (
        <div className="bg-background bg-cover flex w-screen h-screen justify-center items-center ">
            <div
                className="bg-amber-700 font-bold border-8 shadow-lg border-gray-900 p-10 flex justify-center align-middle items-center flex-col">
                <button
                    className="cursor-pointer px-4 py-1 border-2 border-gray-900 bg-gray-900 rounded-xl text-white hover:bg-amber-700 mb-10"
                    onClick={() => handleSubmitnewgame()}>NEW GAME
                </button>
                <div className="flex ">
                    <div className="flex flex-row justify-around items-center mx-10 px-20 w-80 h-30">
                        <ul className="px-2 py-1 decoration-0 flex-col justify-between">
                            {users.map((user) => {
                                return <div className="flex w-80 h-30 justify-between" key={user.id}>
                                    <ul className="flex">
                                        <li>{user.name}</li>
                                    </ul>
                                    <ul className="flex">
                                        <li>{user.score}</li>
                                    </ul>
                                </div>
                            })}
                        </ul>
                        <ul className="px-2 py-1 decoration-0 flex-col justify-between">
                            {users.map((user) => {
                                return <div className="flex" key={user.id}>
                                    <ul className="flex justify-around">
                                        <li></li>
                                    </ul>
                                </div>
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}


