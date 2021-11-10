import React, { useState, useEffect } from 'react'
import "./crypto-decrypter.css"
import Timer from "../timer"

function CryptoDecrypter() {

    const [userScore, setUserScore] = useState(0)
    const [userEntry, setUserEntry] = useState()
    const [randomNums, setRandomNums] = useState([])
    const [answer, setAnswer] = useState()

    //Creating an array to map the alphabet using character codes
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x))
    console.log(alphabet);

    const textInput = React.useRef()
    const clearInput = () => (textInput.current.value = "")

    //Handle submit of the user entered text
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        // console.log("target Value -", parseInt(e.target[0].value))

        setUserEntry(e.target[0].value)
    }

    //Check the user word against the generated word
    const checkCode = () => {
        console.log("On Form Submit", answer, userEntry)
        if (userEntry === answer) {
            setUserScore(userScore +1)
            generateRandomNums()
            generateRandomWord()
            setUserEntry(null)
        } else {
            generateRandomNums()
            generateRandomWord()
            setUserEntry(null)
        }
    }

    //Generate the random numbers to be used with the cipher 
    const generateRandomNums = () => {

        let localRandomNums = []

        while(localRandomNums.length < 27) {
            var r = Math.floor(Math.random() * 100) + 1
            if (localRandomNums.indexOf(r) === -1 )
            localRandomNums.push(r)
        }

        setRandomNums(localRandomNums)
    }

    //Grab a word from the list of possible words to use in the decryption code
    const generateRandomWord = () => {

        let localRandomWords = []
    }

    const checkScore = () => {
        if (userScore === 10) {
            console.log("You have passed the Crypto Dectyptor game!")
        }
    }

    return <div id="cryptoDecrypterGame" className="container">
        <div className="row">
            <div className="col-6">
                <h1 id="score">Score : {userScore}</h1>
            </div>
            <div className="col-6">
                <Timer/>
            </div>
        </div>


    
    </div>



}

export default CryptoDecrypter