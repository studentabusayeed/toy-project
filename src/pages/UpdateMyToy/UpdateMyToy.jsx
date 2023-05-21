import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyToy = () => {
    const data = useLoaderData();
    const { price, description, quantity, _id } = data;

    const handleUpdate= event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = { price, quantity, description };

        // send data to the server side
        fetch(`https://toy-project-server.vercel.app/toys/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-20">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" defaultValue={price} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name="description" defaultValue={description} className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6 grid justify-items-center mb-4">
                <input className="btn btn-success w-1/2" type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default UpdateMyToy;