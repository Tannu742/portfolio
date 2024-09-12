import React from 'react';

const Heading = ({ title = 'title', placeholder = 'placeholder', headingType = 'H1' }) => {
    switch (headingType) {
        case 'H1':
            return (
                <>
                    <h1 className='theme-heading'><span data-placeholder={placeholder} className='position-relative'>{title}</span></h1>
                    <p className='p-4 theme-headingPara'>Passionate frontend developer crafting seamless and engaging
                        user experiences through innovative design and cutting-edge technology.</p>
                </>
            )
        case 'H2':
            return (
                <>
                    <h2 className='theme-heading'><span data-placeholder={placeholder} className='position-relative'>{title}</span></h2>
                    <p className='p-4 theme-headingPara'>Passionate frontend developer crafting seamless and engaging
                        user experiences through innovative design and cutting-edge technology.</p>
                </>
            )
        case 'H3':
            return (
                <>
                    <h3 className='theme-heading'><span data-placeholder={placeholder} className='position-relative'>{title}</span></h3>
                    <p className='p-4 theme-headingPara'>Passionate frontend developer crafting seamless and engaging
                        user experiences through innovative design and cutting-edge technology.</p>
                </>
            )
        case 'H4':
            return (
                <>
                    <h4 className='theme-heading'><span data-placeholder={placeholder} className='position-relative'>{title}</span></h4>
                    <p className='p-4 theme-headingPara'>Passionate frontend developer crafting seamless and engaging
                        user experiences through innovative design and cutting-edge technology.</p>
                </>
            )
        case 'H5':
            return (
                <>
                    <h5 className='theme-heading'><span data-placeholder={placeholder} className='position-relative'>{title}</span></h5>
                    <p className='p-4 theme-headingPara'>Passionate frontend developer crafting seamless and engaging
                        user experiences through innovative design and cutting-edge technology.</p>
                </>
            )
        case 'H6':
            return (
                <>
                    <h6 className='theme-heading'><span data-placeholder={placeholder} className='position-relative'>{title}</span></h6>
                    <p className='p-4 theme-headingPara'>Passionate frontend developer crafting seamless and engaging
                        user experiences through innovative design and cutting-edge technology.</p>
                </>
            )
        default:
            return (
                <>
                    <h2 className='theme-heading'><span data-placeholder={placeholder} className='position-relative'>{title}</span></h2>
                    <p className='p-4 theme-headingPara'>Passionate frontend developer crafting seamless and engaging
                        user experiences through innovative design and cutting-edge technology.</p>
                </>
            )
    }
}

export default Heading;
