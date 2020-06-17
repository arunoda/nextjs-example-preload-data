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
                <div className="details">
                    <div className="artwork">
                        <a href={trackViewUrl} target="_blank">
                            <img src={artworkUrl100} />
                        </a>
                    </div>
                    <div className="info">
                        <div className="title">{trackName}</div>
                        <div className="artists">{artistName}</div>
                    </div>
                </div>
                <audio controls preload="none">
                    <source src={previewUrl} type="audio/mpeg" />
                </audio>
                <style jsx>{`
                    .track {
                        margin: 20px 0;
                        padding: 10px;
                        border: 1px solid #EEE;
                        border-radius: 4px;
                        max-width: 600px;
                        background-color: #FAFAFA;
                    }

                    .details {
                        display: flex;
                        height: 50px;
                    }

                    .artwork {
                        width: 50px;
                    }

                    .artwork img {
                        height: 50px;
                        width: 50px;
                    }

                    .info {
                        padding: 0 10px;
                        flex: 1;
                    }

                    .info .title {
                        font-size: 18px;
                        margin-bottom: 5px
                    }

                    .info .artists {
                        font-size: 15px;
                    }

                    audio {
                        margin: 15px 0 0 0;
                        width: 100%;
                        outline: 0;
                    }

                    @media only screen and (min-device-width : 768px) {
                        audio {
                            height: 25px;
                        }
                    }
                `}</style>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Music by Marshmello</h1>
            <div className="link-home">
                <a href="https://github.com/arunoda/nextjs-example-preload-data" target="_blank">
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
                    font-size: 28px;
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