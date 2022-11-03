import {useState} from 'react'
import {SearchInput} from '../componenets/SearchInput.js'
import styles from '../css/main.module.css'

function Main(){

    return (
        <div className={styles.main}>
            This is main
            <SearchInput />

            <div>
                
            </div>


        </div>
    )
}


export default Main;