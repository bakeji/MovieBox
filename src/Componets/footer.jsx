import React from "react";

export default function Footer(){
    return(
        <div className="footer">
        <div className="social-media">
            <a href="#"><img src="./facebook.png" alt="facebook" /></a>
            <a href="#"><img src="./instagram.png" alt="instagram" /></a>
            <a href="#"><img src="./twitter.png" alt="twitter" /></a>
            <a href="#"><img src="./youtube.png" alt="youtube" /></a>
        </div>

        <div className="privacy">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Press Room</a>
        </div>

        <p className="copyright"> © 2023 MovieBox by Bakare Fatimoh </p>
    </div>
    )
}