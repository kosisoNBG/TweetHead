import React from 'react';
import html2canvas from 'html2canvas';


const NavBar = ({mainRef}) => {
  const handleDownload = async () => {
    if (mainRef && mainRef.current) {
      try {
        const canvas = await html2canvas(mainRef.current, { useCORS: true, allowTaint: true });
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'form-data.png';
        link.click();
      } catch (error) {
        console.error('Error generating image', error);
      }
    } else {
      console.error('mainRef is not defined or current is not set');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-md row">
          <div className='col-md-10 col-4'>
          <a className="navbar-brand " href="#">Navbar</a>
          </div>
          <div className='col-md-2 col-4'>
          <button className="btn btn-outline-success me-2 text-nowrap " onClick={handleDownload} type="button" value="Download Here">Download Image</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar