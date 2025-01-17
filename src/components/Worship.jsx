import React from 'react';
import { Carousel } from 'react-bootstrap';
import Pic2 from '/pic2.jpg';
import Pic4 from '/pic4.jpg';
import Pic6 from '/pic6.jpg';
import Pic7 from '/pic7.jpg';


const Worship = () => {
    const audioUrl = '/Nature.mp3'; // Path to your audio file in the public folder

    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-r from-black to-white pt-20">
            <h1 className="text-4xl font-bold text-white mb-8">Worship</h1>
            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr1DMONakU9MUecTXVHg290MknEaXlFRhrA&s"
                    alt="Worship"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Original Worship content */}
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mb-8 mt-8 transition-transform transform hover:scale-105"> {/* Added mt-8 for margin top */}
                <h2 className="text-3xl font-bold text-center text-black mb-4">What is Worship?</h2>
                <p className="text-lg text-gray-700 text-center hover:text-teal-500 transition duration-300">
                    Worship is the heart's cry of gratitude and love,<br />
                    A sacred moment with the divine above.<br />
                    It's in the whispers of the soul at peace,<br />
                    In songs of joy that never cease.<br />
                    Worship is more than words can say,<br />
                    It's a life lived in a holy way.<br />
                </p>
            </div>

            {/* Carousel */}
            <div className="w-full max-w-screen-sm mx-auto">
                <Carousel interval={1000} controls={false} indicators={false} style={{ maxWidth: '800px', marginTop: '15px', marginBottom: '50px' }}>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={Pic2} alt="Image 2" style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={Pic4} alt="Image 4" style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={Pic6} alt="Image 6" style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={Pic7} alt="Image 7" style={{ borderRadius: '10px', objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>
                    </Carousel.Item>

                </Carousel>

            </div>

            {/* Audio Player */}
            <audio controls autoPlay>
                <source src={audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Worship;
