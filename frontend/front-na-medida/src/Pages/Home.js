import React, {useState, useEffect} from 'react';
import {Gallery, GalleryImage} from 'react-gesture-gallery';
import {images} from './Images.js';
import '../home.css'

const INITIAL_INDEX = 0;

const Home = () => {
    const [index, setIndex] = useState(INITIAL_INDEX);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === images.length - 1) {
                setIndex(INITIAL_INDEX);
            } else {
            setIndex(index + 1)}}, 5000)
        return () => clearInterval(interval)
    }, [index])
    return(
        <div id='Home'>
            <Gallery className="galeria" index={index} onRequestChange={i => {
                setIndex(i);
            }}
            style={{
                
            }}>
                {images.map(image => (
                    <GalleryImage className="image" src={image} objectFit="contain" style={{}}/>
                ))}
            </Gallery>
           
        </div>
    );
}

export default Home;