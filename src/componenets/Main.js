import {useState, useEffect} from 'react';
import {SearchInput} from '../componenets/SearchInput.js'
import styles from '../css/main.module.css'

function Main(){

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/users").then(
            response => response.json()
        ).then(
            data => {
                setData(data);
            }
        ).catch(
            (err) => console.log(err)
        )
    }, [])

    return (
        <div className={styles.main}>
            This is main
            <SearchInput />

            <div>
                {data.users.map((u) => <p key = {u.id}>{u.name}</p>)}
            </div>


        </div>
    )
}


export default Main;