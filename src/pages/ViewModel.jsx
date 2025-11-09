import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../components/ModelCard';

const ViewModel = () => {
    const data = useLoaderData()
    console.log(data)


    return (
        <div>
            <div className="text-3xl text-center font-bold mb-5">View All Models</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    data.map(model => <ModelCard key={model._id} model={model}></ModelCard>)
                }
            </div>
        </div>
    );
};

export default ViewModel;