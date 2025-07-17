import React from "react";
import Fade from "react-reveal/Fade"

import "../styles/news.scss"
import "../styles/include-media.scss"


const News = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="news-wrapper">
                <Fade bottom>
                    <h1>Latest News</h1>
                </Fade>
                <div></div>
                </div>
            </div>
        </div>
    )
}

export default News;