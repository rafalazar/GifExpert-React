import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);
    console.log(loading);

    return(
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading ? <p className="animate__animated animate__flash">Loading...</p> : null}

            <div className="card-grid">
                
                {
                    images.map(img => {
                        return <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    })
                }
                
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid;