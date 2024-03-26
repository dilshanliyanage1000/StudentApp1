import React from 'react';

function AddStudent() {

    return (

        <div className='app'>

            <main className="app container text-center">

                <div className="m-0 border-0 dark-bg rounded-4">

                    <form>

                        <h1 className="display-6 mb-5">Add Student</h1>

                        <div className='row'>

                            <div className='col-md-6 col-lg-6'>
                                <div className="mb-4 text-start">
                                    <label htmlFor="student_number" className="form-label">Student Number</label>
                                    <input type="text" className="form-control mt-2 rounded-3 custom-width tb-input" name='student_number' id="student_number" required />
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-6'>
                                <div className="mb-4 text-start">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control mt-2 rounded-3 custom-width tb-input" name='email' id="email" required />
                                </div>
                            </div>

                        </div>

                        <div className='row'>

                            <div className='col-md-6 col-lg-6'>
                                <div className="mb-4 text-start">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control mt-2 rounded-3 custom-width tb-input" name='first_name' id="first_name" required />
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6'>
                                <div className="mb-4 text-start">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control mt-2 rounded-3 custom-width tb-input" name='last_name' id="last_name" required />
                                </div>
                            </div>

                        </div>

                        <div className='row'>

                            <div className='col-md-6 col-lg-6'>
                                <div className="mb-4 text-start">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control mt-2 rounded-3 custom-width tb-input" name='address' id="address" required />
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6'>
                                <div className="mb-4 text-start">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control mt-2 rounded-3 custom-width tb-input" name='city' id="city" required />
                                </div>
                            </div>

                        </div>


                        <div className='row'>

                            <div className='col-md-6 col-lg-6'>
                                <div className="mb-4 text-start">
                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                    <input type="number" className="form-control mt-2 rounded-3 custom-width tb-input" name='phone_number' id="phone_number" required />
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6'>
                                <div className="mb-4 text-start">
                                    <label htmlFor="program" className="form-label">Program</label>
                                    <input type="text" className="form-control mt-2 rounded-3 custom-width tb-input" name='program' id="program" required />
                                </div>
                            </div>

                        </div>

                        <button type="button" className="mt-3 btn btn-success custom-width">Create Student</button>

                    </form>

                </div>

            </main>

        </div>
    );
}

export default AddStudent;