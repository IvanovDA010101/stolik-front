import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const TikTokVideoGallery = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        fetchVideos();
    }, []); // Выполняет запрос на загрузку видео один раз при загрузке компонента

    const fetchVideos = async () => {
        try {
            // const response = await fetch('http://45.151.144.194:8080/api/v1/restaurants/3/media');
            // if (!response.ok) {
            //     throw new Error('Failed to fetch videos');
            // }
            // const data = await response.json();
            setVideos( [
                "https://cdn.discordapp.com/attachments/1193545605939728446/1204193567690596352/dizayn-proekt-restorana-ot-nasey-studii-dizayna-interera_VIDEOMIN.NET.mp4?ex=65d3d7a7&is=65c162a7&hm=f938b94af106d0e628b5386bd906b13e4d22e9dbde06ecf3e95f3e43b5850b16&",
                "https://cdn.discordapp.com/attachments/1193545605939728446/1204192709406101524/interer-restorana-portfolio-33by-architecture_VIDEOMIN.NET.mp4?ex=65d3d6da&is=65c161da&hm=52521fc0fe65379d268d5ed6525167b60e8e9d1de33936224a19794e1f81efd4&",
                "https://cdn.discordapp.com/attachments/1045720492318928906/1204059811935821844/Venice_5.mp4?ex=65d35b15&is=65c0e615&hm=8bf0d2ec5bb58686258685bca82ae72054d5b1b86603f666fbffdfcfa0ce197a&"])

            // setVideos(data.videos);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const changeVideo = (step) => {
        const newIndex = currentVideoIndex + step;
        // console.log(newIndex)
        // console.log(videos)
        if (newIndex >= 0 && newIndex < videos.length) {
            setCurrentVideoIndex(newIndex);
        }
    };

    return (
        <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
            {videos.length > 0 &&
                videos.map((video, index) => {
                    console.log(index)
                    console.log(currentVideoIndex)
                    return (
                        <div key={index} style={{
                            display: index >= currentVideoIndex && index < currentVideoIndex + 1 ? 'block' : 'none',
                            height: '100%',
                            position: 'absolute',
                            transform: 'translateY(-${currentVideoIndex * 100}vh)'
                        }}>

                            <ReactPlayer
                                url={video}
                                playing={index === currentVideoIndex}
                                width="100vw"
                                height="100vh"
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    );
                })
            }
            <div style={{position: 'absolute', bottom: 0}}>
                <button onClick={() => changeVideo(-1)}>Предыдущее видео</button>
                <button onClick={() => changeVideo(1)}>Следующее видео</button>
            </div>
        </div>
    );
};

export default TikTokVideoGallery;
