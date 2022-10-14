import React from 'react';
import './About.css';
import Image from '../Images/images.jfif'
const About = () => {
    return (
        <div className='about-container'>
            <div>
                <h2>About <span className='highlight'>Section</span></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, reprehenderit. Incidunt quasi at voluptatum delectus, molestias itaque aut aliquam et nobis rem dolor ducimus ad optio perferendis. Rem quisquam corporis magni in magnam blanditiis a, doloribus fugit adipisci voluptas quam aperiam possimus quasi consectetur quo, repellendus laudantium. Nihil, sint? Ullam laborum nisi, dolore eius temporibus, aut, suscipit nihil architecto sunt possimus dolor accusamus cum fuga nam optio facere molestiae voluptas?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae molestiae facilis non eaque, consectetur unde nostrum mollitia officia in vitae aspernatur impedit veritatis ab corporis! Reiciendis maxime soluta enim qui perferendis odio delectus ex laboriosam error nulla officiis eligendi animi quidem minima pariatur, fugit suscipit voluptate repudiandae. Cupiditate, sequi aut.</p>
            </div>
            <img src={Image} alt="" />
        </div>
    );
};

export default About;