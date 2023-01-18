import React, { useState } from 'react';
import './style.css';

const Multipleinput = () => {

     const [userRegister, setUserRegister] = React.useState(
          {
               username: "",
               email: "",
               phone: "",
               password: ""
          }
     );

     const [records, setRecords] = useState([]);

     const handleInput = (e) => {
          const name = e.target.name;
          const value = e.target.value;

          setUserRegister(
               {
                    ...userRegister,
                    [name]: value
               }
          )
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          const newRecord = { ...userRegister, id: new Date().getTime().toString() };
          setRecords([...records, newRecord]);
          setUserRegister({
               username: "",
               email: "",
               phone: "",
               password: ""
          });
          console.log(records);
     }

     return (
          <>
               <form onSubmit={handleSubmit}>

                    <div>
                         <label htmlFor="username">Fullname</label>
                         <input type="text" autoComplete='off' value={userRegister.username}
                              onChange={handleInput}
                              name="username" id="username" placeholder='Enter your name here...' />
                    </div>

                    <div>
                         <label htmlFor="email">Email</label>
                         <input type="email" autoComplete='off' value={userRegister.email}
                              onChange={handleInput}
                              name="email" id="email" placeholder='Enter your email here...' />
                    </div>

                    <div>
                         <label htmlFor="phone">Phone</label>
                         <input type="tel" autoComplete='off' value={userRegister.phone}
                              onChange={handleInput} maxLength={10}
                              name="phone" id="phone" placeholder='Enter your phone number here...' />
                    </div>

                    <div>
                         <label htmlFor="password">Password</label>
                         <input type="password" autoComplete='off' value={userRegister.password}
                              onChange={handleInput}
                              maxLength={16}
                              name="password" id="password" placeholder='Enter your password here...' />

                    </div>

                    <button type='submit'>Registration</button>

               </form>

               <div className='details'>
                    {
                         records.map((currElem) => {
                              const { username, email, phone, password } = currElem;
                              return (
                                   <div className='showDataStyle' key={currElem.id} >
                                        <p>{username}</p>
                                        <p>{email}</p>
                                        <p>{phone}</p>
                                        <p>{password}</p>
                                   </div>
                              )
                         })
                    }
               </div>

          </>
     )

}

export default Multipleinput;