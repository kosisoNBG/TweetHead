import React, { useState, useEffect } from 'react';
import './Form.css'

const Form = ({ updateFormData, formData }) => {
  const [localFormData, setLocalFormData] = useState(formData);

  useEffect(() => {
    setLocalFormData(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const updatedFormData = {
      ...localFormData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    };
    setLocalFormData(updatedFormData);
    updateFormData(updatedFormData);
  };
  


  return (

    <div>
        <form action="">
          <div className='input-con row'>
            <div className='col-25'>
            <label className='al ' htmlFor="name">Name</label>
            </div>
            <div className='col-75' >
            <input type="text" name="name"  value={localFormData.name} onChange={handleChange} tabIndex="1"/>
            </div>
          </div>

          <div className='input-con row'>
            <div className='col-25'>
            <label className='al ' htmlFor="headline">Username</label>
            </div>
            <div className='col-75'>
            <input type="text" name='userName' value={localFormData.userName} onChange={handleChange} tabIndex="2"/>
            </div>
          </div>

          <div className='input-con row'>
            <div className='col-25'>
            <label  className= 'al' htmlFor="message">Message</label>
            </div>
            <div className='col-75'>
            <input type="text" name="message" value={localFormData.message} onChange={handleChange} tabIndex="3"/>
            </div>
          </div>

          <div className='input-con row'>
            <div className='col-25'>
            <label className='al text-nowrap extra-padding' htmlFor="profile picture">Profile Picture</label>
            </div>
            <div className='col-75'>
            <input type="file"  name="profilePicture"  onChange={handleChange} tabIndex="4" id="" />
            </div>
          </div>

          <select id='grid-select'>
             <option className=" bgp">Column</option>
             <option className=" bgp2">Column</option>
             <option className=" bgp3">Column</option>
             <option className=" bgp4">Column</option>
          </select>
          <div className='input-con row'>
            <div className='col-25'>
            <label className='al text-nowrap extra-padding' htmlFor="background Image">Background Image</label>
            </div>
            <div className='col-75'>
            <input type="file"   name="backgroundImage"  onChange={handleChange} tabIndex="5" id="" />
            </div>
          </div>

          {/* <div className='input-con row'>
            <div className='col-25'>
            <label className='al text-nowrap extra-padding' htmlFor="BackGround Color">Background Color</label>
            </div>
            <div className='col-75'>
            <input type="color" name="" id="" />
            </div>
          </div> */}

            <br />

          {/* <div className='input-con'>
            <div className='col-25'>
            <label className='al text-nowrap extra-padding' htmlFor="background space">BackGround Spacing</label>
            </div>
            <div className='col-75'> 
            <div className='slidecontainer'>
            <input type="range" name="backGroundSpacing" onChange={handleChange} min="1" max="100" value={[localFormData.backGroundSpacing, localFormData.backGroundSpacing2]} className="slider" id="myRange" tabIndex="6"/>
            </div>
            </div>
         </div> */}
        </form>
    </div>
  )
}

export default Form