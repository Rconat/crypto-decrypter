import React, { useState, useEffect } from 'react'
import "./crypto-decrypter.css"
import Timer from "../timer"

function CryptoDecrypter() {

    const [userScore, setUserScore] = useState(0)
    const [userEntry, setUserEntry] = useState()
    const [randomNums, setRandomNums] = useState([])
    const [answer, setAnswer] = useState()

    const textInput = React.useRef()
    const clearInput = () => (textInput.current.value = "")

    //Handle submit of the user entered text
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        // console.log("target Value -", parseInt(e.target[0].value))

        setUserEntry(e.target[0].value)
    }

    const checkCode = () => {
        console.log("On Form Submit", answer, userEntry)
    }

    //Generate the random numbers to be used with the cipher 
    const generateRandomNums = () => {

        let localRandomNums = []

        while(localRandomNums.length < 27) {
            var r = Math.floor(Math.random() * 100) + 1
            if (localRandomNums.indexOf(r) === -1 )
            localRandomNums.push(r)
        }
    }

    //Grab a word from the list of possible words to use in the decryption code
    const generateRandomWord = () => {

        let localRandomWords = []
    }

    return <div id="cryptoDecrypterGame" className="container">
        <div className="row">
            <div className="col-6">
                <h1 id="score">Score : {userScore}</h1>
            </div>
        </div>
    
    </div>



}

export default CryptoDecrypter