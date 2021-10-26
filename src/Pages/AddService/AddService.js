import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://fierce-thicket-85058.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <h3>Add A Service</h3>
            <div className="container">
                <div className="card w-50 mx-auto mt-5 shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className="mt-3 py-2 px-4 rounded-pill w-75" /> <br />
                        <input type="number" {...register("price")} placeholder="price" className="mt-3 py-2 px-4 rounded-pill w-75" /> <br />
                        <input type="number"  {...register("time")} placeholder="Time (hours)" className="mt-3 py-2 px-4 rounded-pill w-75" /> <br />
                        <input {...register("img")} placeholder="image" className="mt-3 py-2 px-4 rounded-pill w-75" /> <br />
                        <textarea {...register("description")} placeholder="description" className="mt-3 py-2 px-4 rounded-pill w-75" /> <br />
                        <input type="submit" className="my-4 btn btn-success rounded-pill w-50" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;