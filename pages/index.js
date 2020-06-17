import { useState, useEffect } from "react"

export default function Index() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetch(`/api/search-music`)
            .then(res => res.json())
            .then(result => setTracks(result))
    }, [])

    const renderTrack = (track) => {
        const {trackId, trackName, artistName, artworkUrl100, previewUrl, trackViewUrl} = track;
        return (
            <div className="track" key={trackId}>
                <div className="artwork">
                    <a href={trackViewUrl} target="_blank">
                        <img src={artworkUrl100} />
                    </a>
                </div>
                <div className="info">
                    <div className="title">{trackName}</div>
                    <div className="artists">{artistName}</div>
                    <audio controls preload="none">
                        <source src={previewUrl} type="audio/mpeg" />
                    </audio>
                </div>
                <style jsx>{`
                    .track {
                        display: flex;
                        margin: 20px 0;
                        padding: 10px;
                        border: 1px solid #EEE;
                        border-radius: 4px;
                        max-width: 600px;
                        background-color: #FAFAFA;
                        height: 100px;
                    }

                    .artwork {
                        width: 100px;
                    }

                    .info {
                        padding: 0 10px;
                        flex: 1;
                    }

                    .info .title {
                        font-size: 20px;
                        margin-bottom: 5px
                    }

                    .info .artists {
                        font-size: 15px;
                    }

                    .info audio {
                        height: 30px;
                        margin: 25px 0 0 0;
                        width: 250px;
                        outline: 0;
                    }
                `}</style>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Music by Marshmello</h1>
            <div className="link-home">
                <a href="https://github.com/arunoda/nextjs-example-preload-data">
                    View Source
                </a>
            </div>
            <div className="tracks">
                {tracks.map(renderTrack)}
            </div>
            <style jsx>{`
                .tracks {
                    margin: 50px 0;
                }
                .container {
                    max-width: 500px;
                    margin: 50px auto;
                    font-family: Arial;
                    padding: 0 10px;
                }

                h1 {
                    margin-bottom: 0px;
                }

                .link-home a {
                    font-size: 12px;
                    color: #00a3ec;
                    text-decoration: none;
                }
            `}</style>
        </div>
    )
}