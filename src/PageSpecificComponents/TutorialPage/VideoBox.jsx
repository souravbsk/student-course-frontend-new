import React, {useState} from 'react'
import ReactPlayer from "react-player";
import Image from "next/image";
import Logo from "src/assets/logo/logo2.png"

const VideoBox = ({title}) => {
    const [videoId] = useState('RB89-44fk6Q');

    return (<div className="video-box w-full aspect-video bg-gray-300 rounded-lg overflow-hidden flex relative">
        <div style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '10px',
            paddingInline: '10px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '60px',
            background: '#000'
        }}>
            <Image src={Logo} alt={'logo'}
                   width={60}
                   height={50}
            />
            <h3 className="course-title text-white text-xl md:text-2xl font-bold bg-clip-text bg-gradient-to-r from-[#502048] to-[#471950]">{title}</h3>
        </div>
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            height={'100%'}
            width={'100%'}
            stopOnUnmount
            onReady={() => {
                const iFrame = document.querySelector('.video-box iframe');
                iFrame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

            }}
        />
        <Image
            src={'https://www.stackkaroo.com/img/general/logo-dark.svg'}
            alt={'StackKaroo'}
            width={130}
            height={40}
            style={{
                position: 'absolute', bottom: 0, right: 0, background: '#000',
            }}
        />
    </div>)
}

export default VideoBox

