import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../shared/ConfirmationModal';
import LoadSpinner from '../shared/LoadSpinner';

const ManageStaff = () => {
    const [deletingStaff, setDeletingStaff] = useState(null);

    const closeModal = () => {
        setDeletingStaff(null);
    }

    const { data: staff, isLoading, refetch } = useQuery({
        queryKey: ['staff'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/staff`, {
                    headers: { authorization: `barer ${localStorage.getItem('accessToken')}` }
                });
                const data = await res.json();
                return data;

            }
            catch {

            }
        }
    })

    if (isLoading) {
        return <LoadSpinner></LoadSpinner>
    }

    const handleDeleteStaff = member => {
        console.log(member);
        fetch(`http://localhost:5000/staff/${member._id}`, {
            method: 'DELETE',
            authorization: `barer ${localStorage.getItem('accessToken')}`
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${member.name} is deleted successfully..`)
                    refetch()
                }
            })
    }



    return (
        <div className='py-6'>
            <h2 className="text-2xl text-center my-4">Manage staff: {staff?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            staff?.map((member, i) => <tr key={member._id} className="hover">
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-8 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                        <img src={member.image} alt='staff' />
                                    </div>
                                </div></td>
                                <td>{member.name}</td>
                                <td>{member.role}</td>
                                <td>
                                    {/* <button className="btn btn-xs btn-error">Delete</button> */}
                                    {/* The button to open modal */}
                                    <label onClick={() => setDeletingStaff(member)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingStaff &&
                <ConfirmationModal
                    title={`Are you sure want to delete?`}
                    message={`If you delete ${deletingStaff.name}, It can't be undone!`}
                    successButtonName="Delete"
                    closeModal={closeModal}
                    successAction={handleDeleteStaff}
                    modalData={deletingStaff}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageStaff;