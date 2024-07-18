import './Main.css'

const Main = ({ formData, mainRef }) => {
  const { name, message, profilePicture, backgroundImage, userName, backGroundSpacing, backGroundSpacing2 } = formData;
  

  return (
    <div >
      
      <div className='row row-cols-lg-auto g-3 align-items-center lar mb-5'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="card w-7 mb-3 col-12 mx-auto "> 
            <div className="card-body">
                <p className="card-text">Welcome to <b>TweetHead!</b> A tool to quickly create a stunning tweet-style <br /> Twitter profile header to boost your personal brand made by</p>
            </div>
        </div>


    <div ref={mainRef} className="cont card mb-3 w-7 mx-auto p-2" style={{width: backGroundSpacing + '%', height: backGroundSpacing2 + 'rem'}}>
      {backgroundImage && <img src={backgroundImage} alt="Background" className="img-style" width="1000" height="300" />}

      {/* <img className='' src={formData.backgroundImage} alt="Cinque Terre"  /> */}
      
      <div className="cen">
        <div className="card mb-3 w-75  mx-auto p-2">
          <div className='text-start second d-flex flex-row mt-2'>
          <div className=" mr-3">
          {profilePicture && <img src={profilePicture} alt="Profile" className="rounded-circle" width="60" />}

                     {/* <img src={formData.profilePicture} className= alt=''/> */}
                    </div>   
          <h4>{name}<br /><span className='username-style'>@</span> <span className='username-style'>{userName}</span></h4>
          
          <span style={{paddingLeft: "30%", fontWeight: "600", color: "#0077b5"}}>+ Follow</span>
          </div>
          <span style={{textAlign: "left"}}>
          {message}
          </span>
        </div>
      </div>
    </div>
    </div>

</div>
  )
}

export default Main