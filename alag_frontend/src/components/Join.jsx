/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Join = () => {

    const features = [
        {
            id: 1,
            number: 1,
            title: 'Hassle-free registration',
            description: 'Enjoy a hassle-free registration process, allowing you to focus solely on learning.',
        },
        {
            id: 2,
            number: 2,
            title: 'Learn from experts',
            description: 'Gain knowledge from industry experts and experienced professionals.',
        },
        {
            id: 3,
            number: 3,
            title: 'Flexible Learning',
            description: 'Flexible learning schedules to suit your convenience.',
        },
        {
            id: 4,
            number: 4,
            title: 'Flexible Learning',
            description: 'Flexible learning schedules to suit your convenience.',
        },
        {
            id: 5,
            number: 5,
            title: 'Flexible Learning',
            description: 'Flexible learning schedules to suit your convenience.',
        },
    ];

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
        width: '90%',
        margin: '0 auto',
        padding: '24px 0',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : '1fr 1fr', // Single column for small screens
        gap: '16px',
        maxWidth: '1200px',
        margin: '0 auto',
        
    };

    const itemStyle = {
        position: 'relative',
        padding: '16px',
        border: '2px solid #B9D9EB',
        borderRadius: '24px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#E9E2FF',
    };

    const iconStyle = {
        position: 'absolute',
        left: '16px',
        top: '25px',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        // backgroundColor: '#4F46E5', // indigo-600
        color: '#BC7FCD',
        fontSize: isSmallScreen ? '24px' : '40px', // Adjust font size based on screen size
        fontWeight: 'bold',

    };

    const titleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginLeft: '60px',
        marginBottom: '8px',
    };

    const descriptionStyle = {
        fontSize: '16px',
        marginLeft: '60px',
        color: '#4B5563', // gray-600
    };

    return (
        <div style={containerStyle}>
            <div style={gridStyle}>
                {features.map((feature) => (
                    <div key={feature.id} style={itemStyle}>
                        <div style={iconStyle}>{feature.number}</div>
                        <div>
                            <div style={titleStyle}>{feature.title}</div>
                            <div style={descriptionStyle}>{feature.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Join;
