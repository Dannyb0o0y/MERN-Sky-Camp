import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';



function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
   
    <div className="container col-12 md-auto">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between mb-4">
        
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between mb-4">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between mb-4">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between mb-4">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
        {/* Marketing Materials - Affordable Ski Breaks  */}
        <div>
          <br></br>
        <p><strong>Thank you for registering with us.  Take a look at our affordable packages, to help you plan your next <span style={{ color: 'orange' }}>trip without spending over the odds.</span></strong></p>
        <br></br>
        <p>There's no denying that, for most of us, budget is certainly would be our biggest consideration when it comes to planning a holiday.we managed to come with a number of travel packages, great value accomodation options and helpful tips to help you save money and enjoy your weeknd at sky camp. </p>
        <br></br>
        <p>Whether you're looking for self-catering accomodation, a simple chalet, a quiet refuge, or even an apartment or hostel, our selection of affordable packages will help you find the right fit.  These accomodation options may not feature world-class spa facilities or Michelin star dining but you can still find these on our sites and they are certainly extremely clean and comfortable which is all you would ever need.  Our reasonably priced packages will all provide the fantastic value for money.</p>
        <br></br>
        <p>Here at Sky Camp Resort, we also recognize that not everyone has the time to take a week off work or some other personal commitments. </p>
        <br></br>
        <br></br>
        <p>The team at Sky Camp Resort</p>

        </div>

      </form>
    </div>
  );
}

export default Signup;
