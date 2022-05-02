import React, { useEffect, useState } from 'react';
import Categori from '../Categori/Categori';
import './Categories.css'

const Categories = () => {
    const [categoris, setCategoris] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setCategoris(data))
    }, [])
    return (
        <div id='categoris' className='container'>

            <h1 className='text-center text-success mt-4  mb-5'>Top Categories</h1>
            <div className="categoris">
                {
                    categoris.map(categori => <Categori
                        key={categori.id}
                        categori={categori}
                    ></Categori>)
                }
            </div>
        </div>
    );
};

export default Categories;