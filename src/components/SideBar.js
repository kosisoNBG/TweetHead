import React from 'react'
import Form from './Form'
import './SideBar.css'

const SideBar = ({ updateFormData, formData }) => {
  return (
  <div className='pos-b'>
      <div className="offcanvas offcanvas-start show reup shadow" data-bs-scroll="true"       data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Control Panel</h5>
          {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
        </div>
        <div className="offcanvas-body text">
        <Form updateFormData={updateFormData} formData={formData} />

        </div>
</div>
    </div>
  )
}

export default SideBar