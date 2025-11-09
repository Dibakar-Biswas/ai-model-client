import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import ModelCard from '../components/ModelCard';

const MyModels = () => {
    const {user} = use(AuthContext)
    const [models, setModels] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`http://localhost:4000/my-models?email=${user.email}`,{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res => res.json())
        .then(data => {
            
            
            setModels(data)
            setLoading(false)
        })
    },[])


    if(loading){
        return <div className='flex justify-center items-center text-4xl'><span className="loading loading-spinner text-success"></span></div>
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    models.map(model => <ModelCard key={model._id} model={model}></ModelCard>)
                }
            </div>
        </div>
    );
};

export default MyModels;