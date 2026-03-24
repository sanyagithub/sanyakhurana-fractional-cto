"use client";

import { useRef, useEffect } from "react";

export default function AudioPlayer({ src }: { src: string }) {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = 1.25;
        }
    }, []);

    return (
        <audio
            ref={audioRef}
            controls
            preload="none"
            className="blog-audio-player"
            onLoadedMetadata={() => {
                if (audioRef.current) {
                    audioRef.current.playbackRate = 1.25;
                }
            }}
        >
            <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
}
