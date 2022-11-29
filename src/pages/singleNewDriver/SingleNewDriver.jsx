import "./singleNewDriver.scss"
import { Storage, API, graphqlOperation } from "aws-amplify"
import { useEffect, useState } from "react"
import { updateRide } from "../../graphql/mutation"

const SingleNewDriver = ({ row, handleClose }) => {
  console.log(row)
  const [licenseUrl, setLicenseUrl] = useState(null)
  const [proofPic, setProofPic] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      const url = await Storage.get(row.user.userDetails.profileImage)
      const license = await Storage.get(`${row.id}_LicenseImage.jpg`)
      console.log(license)
      setProofPic(url)
      setLicenseUrl(license)
    }
    fetchImage()
  }, [])

  const handleVerification = async (condition) => {
    var input
    if (condition) {
      input = {
        id: row.id,
        isVerified:true
      }
    }else{
      input = {
        id: row.id,
        isVerified:undefined
      }
    }
    try {
      const rideData = await API.graphql(
        graphqlOperation(
          updateRide, 
          {
            input
          }
        )
      )
      window.location.reload(false)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='popup-box'>
      <div className="box">
        <button className="btn-close" onClick={handleClose}>x</button>
        <div className="single">
          <div className="singleContainer">
            <div className="top">
              <div className="left">
                <h1 className="title">Information</h1>
                <div className="item">
                  <div className="details">
                    <h1 className="itemTitle">{`${row.user.userDetails.firstName} ${row.user.userDetails.lastName}`}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{row.user.email}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">{row.user.userDetails.phoneNumber}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Type of Ride:</span>
                      <span className="itemValue">{row.type}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Birth Date:</span>
                      <span className="itemValue">{row.user.userDetails.birthDate.slice(0, 10)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <h1 className="title">Details</h1>
                <div className="pictures">
                  {proofPic && <img src={proofPic} alt="itemIMG" className="proofPic" />}
                  {licenseUrl && <img src={licenseUrl} alt="itemIMG" className="licensePic" />}
                </div>
              </div>
            </div>
            <div className="bottoms">
              <button className="btn1" onClick={() => {handleVerification(true)}}>Approve</button>
              <button className="btn2" onClick={() => {handleVerification(false)}}>Denied</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleNewDriver