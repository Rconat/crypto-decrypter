import React, { useState, useEffect } from 'react'
import "./crypto-decrypter.css"
import Timer from "../timer"

function CryptoDecrypter() {

    const [userScore, setUserScore] = useState(0)
    const [userEntry, setUserEntry] = useState()
    const [randomNums, setRandomNums] = useState([])
    const [randomWord, setRandomWord] = useState([])
    const [answer, setAnswer] = useState()

    //Creating an array to map the alphabet using character codes
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x))
    console.log(alphabet);

    //Pool of words to be chosen at random
    const words = ["ethereum", "bitcoin", "blockchain", "coinbase", "altcoin", "exchange", "genesis", "mining", "satoshi", "nakomoto", "token", "wallet", "stablecoin", "public", "private", "market", "cryptocurrency", "decentralization", "account", "address", "airnode", "algorithm", "allocation", "anonymous", "asynchronous", "authentication", "bandwidth", "benchmark", "bubble", "capital", "capitulation", "chain", "chargeback", "cipher", "collateral", "confirmation", "contract", "correction", "cryptoasset", "cryptography", "cypherpunk"]

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

        while(localRandomNums.length < 26) {
            var r = Math.floor(Math.random() * 100) + 1
            if (localRandomNums.indexOf(r) === -1 )
            localRandomNums.push(r)
        }

        setRandomNums(localRandomNums)
        console.log(localRandomNums)
    }

    //Grab a word from the list of possible words to use in the decryption code
    const generateRandomWord = () => {

        let localRandomWord = []

        var r = Math.floor(Math.random() * words.length)

        localRandomWord.push(words[r])

        // console.log(localRandomWord)
        setRandomWord(localRandomWord)
    }



    const checkScore = () => {
        if (userScore === 10) {
            console.log("You have passed the Crypto Dectyptor game!")
        }
    }

    //Generate random numbers on page load
    useEffect(() => {
        generateRandomNums()
        generateRandomWord()
    }, [])

    // useEffect(() => {
    //     //Checking user input against the random word
    //     checkCode()

    //     //Clearing the user input
    //     clearInput()
    // })

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