import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const Recommended = () => {
  return (
    <div className='recommended'>
        <div className='side-video-list'>
            <img src={thumbnail1} alt="" />
            <div className='vid-info'>
                <h4>Switzerland from FPV Drone by Mathews</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail2} alt="" />
            <div className='vid-info'>
                <h4>Italy tour by Backpackers Morgan</h4>
                <p>GreatStack</p>
                <p>499K Views</p>
            </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail3} alt="" />
            <div className='vid-info'>
                <h4>HAMZA Mall in Turkey </h4>
                <p>GreatStack</p>
                <p>269K Views</p>
            </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail4} alt="" />
            <div className='vid-info'>
                <h4>Switzerland from FPV Drone by Mathews</h4>
                <p>GreatStack</p>
                <p>349K Views</p>
            </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail5} alt="" />
            <div className='vid-info'>
                <h4>Prankster Videos by College Friends</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail6} alt="" />
            <div className='vid-info'>
                <h4>Dubai Lamborghini showroom Altera street</h4>
                <p>GreatStack</p>
                <p>879K Views</p>
            </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail7} alt="" />
            <div className='vid-info'>
                <h4>DCU College Tour by local student</h4>
                <p>GreatStack</p>
                <p>699K Views</p>
            </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail8} alt="" />
            <div className='vid-info'>
                <h4>Life in Miami</h4>
                <p>GreatStack</p>
                <p>448K Views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommended