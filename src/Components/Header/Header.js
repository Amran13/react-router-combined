import React from 'react';
import './Header.css';
import Image from '../Images/avatar-Profile.png'
const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='header-heading'>
                    <h1>Hello, World!</h1>
                    <h1>This is <span className='highlight'>Heading</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus, iure ducimus corporis culpa itaque vero pariatur molestias ipsam, mollitia maxime. Ipsum facere saepe quo voluptate corrupti eius ab at dolor sed. Delectus autem maiores reiciendis? Sequi tempore accusantium pariatur minus earum asperiores dolores inventore nulla magnam. Recusandae, facilis distinctio! Quas repudiandae velit inventore natus omnis, ipsam, iusto necessitatibus incidunt maiores, exercitationem dolor tempora ex? Sunt officiis dolor ea. Deserunt dicta expedita consectetur quo iure temporibus, repudiandae illum voluptate possimus a. Quibusdam aspernatur aliquam cumque maiores placeat quae assumenda! Deserunt nulla fugiat omnis praesentium modi rerum mollitia magni tempora dolores!</p>
                </div>
                <div>
                <img src={Image} alt="Images" />
                </div>
            </div>

        </div>
    );
};

export default Header;