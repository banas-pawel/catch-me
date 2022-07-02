import React, {useState, useEffect} from "react";
import {debounce} from "lodash";
import {useNavigate} from "react-router-dom";
import {
    onSnapshot,
    addDoc,
    limit,
    query,
    where,
    orderBy,
    setDoc,
    FirestoreDataConverter,
    doc
} from "firebase/firestore";
import {getId, usersCollectionRef} from "./Firestore/userCollection";


export const CatchGame = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(1000);

    const CatchDiv = ({onClick}) => {
        let min = 20
        const [left, setLeft] = useState((Math.floor(Math.random() * ((window.innerWidth - 100) - min + 1)) + min));
        const [top, setTop] = useState((Math.floor(Math.random() * ((window.innerHeight - 100) - min + 1)) + min));
        const handleClick1 = () => {
            if (typeof onClick === "function") {
                onClick()
                ;
            }
        }

        const handleHover = (min) => {
            setLeft(Math.floor(Math.random() * ((window.innerWidth - 100) - min + 1)) + min);
            setTop(Math.floor(Math.random() * ((window.innerHeight - 100) - min + 1)) + min);
        }

        const levelup = debounce(() => {
                handleHover(1);
            },
            time);

        if (lvl === 1) {
            return <div className="bg-lvl1 bg-cover bg-center z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 2) {
            return <div className="bg-lvl2 bg-cover bg-center z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 3) {
            return <div className="bg-lvl3 bg-cover bg-center z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 4) {
            return <div className="bg-lvl4 bg-cover bg-center z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 5) {
            return <div className="bg-lvl5 bg-cover bg-center z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 6) {
            return <div className="bg-lvl6 bg-cover bg-center z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 7) {
            return <div className="bg-lvl7 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 8) {
            return <div className="bg-lvl8 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 9) {
            return <div className="bg-lvl9 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 10) {
            return <div className="bg-lvl10 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 11) {
            return <div className="bg-lvl11 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 12) {
            return <div className="bg-lvl12 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 13) {
            return <div className="bg-lvl13 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 14) {
            return <div className="bg-lvl14 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 15) {
            return <div className="bg-lvl15 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 16) {
            return <div className="bg-lvl16 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 17) {
            return <div className="bg-lvl17 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 18) {
            return <div className="bg-lvl18 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 19) {
            return <div className="bg-lvl19 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 20) {
            return <div className="bg-lvl20 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 21) {
            return <div className="bg-lvl21 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 22) {
            return <div className="bg-lvl22 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 23) {
            return <div className="bg-lvl23 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 24) {
            return <div className="bg-lvl24 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 25) {
            return <div className="bg-lvl25 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 26) {
            return <div className="bg-lvl26 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 27) {
            return <div className="bg-lvl27 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 28) {
            return <div className="bg-lvl28 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl === 29) {
            return <div className="bg-lvl29 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }
        if (lvl >= 30) {
            return <div className="bg-lvl30 bg-cover bg-center relative z-20"
                        style={{
                            position: 'absolute',
                            left: left + 'px',
                            top: top + 'px',
                            width: '130px',
                            height: '130px',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            border: '3px solid black'
                        }}
                        onMouseEnter={() => levelup()}
                        onClick={() => {
                            handleClick1();
                            handleHover(20)
                        }}>
            </div>
        }

    }


    let lvl = (count - 10) * 0.1 + 2
    let history = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const q = query(usersCollectionRef, where('name', '==', doc.name), orderBy('score', 'desc'), limit(10));
        onSnapshot(q, (snapshot) => { setUsers(snapshot.docs.map(doc => doc.data())) });
        // const getUsers = async () => { await getDocs(usersCollectionRef).then(res => {
        //         const usr = res.docs.map(doc => ({...doc.data(), id: doc.id}))
        //         setUsers(usr)
        //     }).catch(err => console.log(err));
        // }
        // getUsers();
    }, []);
    useEffect(() => {
        console.log(doc.name)
    }, [users])

    const handleSubmitnewgame = () => {
        history(`/`);
        if (count === "" || users === "") {
            return
        }
        addDoc(usersCollectionRef, {score: count});
        const id  = getId();
        console.log(id);
    }

    // const docId = docRef.id
    // const updateUser = async (id, updates) => {
    //     const docRef = doc(db, "catch-me", id)
    //     updateDoc(docRef, updates)
    // }

    const handleSubmitscoreboard = () => {
        history(`/scoreboard`);
        if (users === "" || count === "") {
            return
        }

        addDoc(usersCollectionRef, {score: count});
        const id  = getId();
        console.log(id);
    }

    return (
        <div className="w-screen h-screen bg-background bg-cover text-base font-mono flex-col">
            <div
                className="flex w-screen justify-between border-gray-900 border-8 items-center bg-amber-700 absolute">
                <div className="p-1 flex justify-around items-center">
                    <div
                        className="h-20 w-20 bg-logo bg-cover bg-center rounded-full border-2 border-gray-900 justify-center items-center">

                    </div>
                    <h2 className="pl-2 text-3xl">Catch me if you can!!!</h2>
                </div>
                <button
                    className="border-gray-900 border-2 text-4xl p-4 bg-gray-900 rounded-xl text-white hover:bg-amber-700"
                    onClick={() => {
                        handleSubmitnewgame();
                        setTime(1000);
                        setCount(0)
                    }}>NEW GAME
                </button>
                <div
                    className="flex justify-center align-middle border-gray-900 border-2 text-4xl p-4 bg-gray-900 rounded-xl text-white">
                    <h2 className="text-4xl mr-4"  >SCORE:{count}</h2> <h2 className="text-4xl"> STAGE:{lvl}</h2>
                    <CatchDiv onClick={() => {
                        setCount(count + 10);
                        if (count > 0) {
                            setTime(time - 100)
                        }
                        if (count > 60) {
                            setTime(time - 50)
                        }
                        if (count > 100) {
                            setTime(time - 10)
                        }
                        if (count > 150) {
                            setTime(time - 5)
                        }
                    }}/>

                </div>
                <button
                    className="text-4xl border-gray-900 border-2 flex align-middle items-center justify-center p-4 bg-gray-900 rounded-xl text-white hover:bg-amber-700 mr-4"
                    onClick={() => handleSubmitscoreboard()}>SCOREBOARD
                </button>
                {/*<h2 className="border-gray-900 border-2 text-4xl p-4 m-1 bg-gray-900 rounded-xl text-white">*/}
                {/*    /!*{users.map(user => {*!/*/}
                {/*    /!*    return (<p key={user.id}>{user.name}</p>)*!/*/}
                {/*    /!*})}*!/*/}
                {/*</h2>*/}

            </div>
            <footer
                className="w-full h-16 bg-amber-700 border-8 border-gray-900 absolute left-0 bottom-0 flex justify-center items-center text-2xl ">
                Meet me @ <a
                className="ml-2 px-2 bg-gray-900 rounded-xl text-white hover:bg-amber-700 border-2 border-gray-900"
                href="https://github.com/banas-pawel">GitHub</a>
            </footer>
        </div>
    )
}
