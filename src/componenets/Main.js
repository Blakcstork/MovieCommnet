import {useState, useEffect} from 'react';
import {SearchInput} from '../componenets/SearchInput.js'
import styles from '../css/main.module.css'

function Main(){
    const [movie, setMovie] = useState([]);
    const [data, setData] = useState([{}])
    let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888"

    useEffect(() => {
        fetch("URL")
        .then((response) => response.json());
    })

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