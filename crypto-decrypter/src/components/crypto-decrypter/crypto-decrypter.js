import React, { useState, useEffect } from 'react'
import "./crypto-decrypter.css"
import Timer from "../timer"

function CryptoDecrypter() {

    const [userScore, setUserScore] = useState(0)

    return <div id="cryptoDecrypterGame" className="container">
        <div className="row">
            <div className="col-6">
                <h1 id="score">Score : {userScore}</h1>
            </div>
        </div>
    
    </div>



}

export default CryptoDecrypter