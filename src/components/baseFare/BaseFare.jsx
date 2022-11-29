import React, { useState, useEffect } from 'react'
import "./baseFare.scss"
import { updateFare } from "../../graphql/mutation"
import { API, graphqlOperation } from "aws-amplify"

const BaseFare = ({ content, handleClose }) => {

    const [baseFare, setBaseFare] = useState(null)
    const [additionalFare, setAdditionalFare] = useState(null)
    const fareId = 'f7c22515-838f-4ddc-bc28-53fb328a0c9e'

    const fareUpdate = async () => {

        var input
        if (content == "Motorcycle") {
            input = {
                id: fareId,
                motorcycleBaseFare: baseFare,
                motorcycleAdditionalFare: additionalFare
            }
        } else {
            input = {
                id: fareId,
                tricycleBaseFare: baseFare,
                tricycleAdditionalFare: additionalFare
            }
        }

        try {
            const fareData = await API.graphql(
                graphqlOperation(
                    updateFare, { input }
                )
            )
        } catch (error) {
            console.error(error)
        }

        window.location.reload(false)
    }


    return (
        <div className='popup-box'>
            <div className="box">
                <button className="btn-close" onClick={handleClose}>x</button>
                <div className="form">
                    {content}

                    <div className="formInput">
                        <label>Update Fare</label>
                        <div>
                            Base Fare <input type="number" placeholder='100' onChange={e => setBaseFare(e.target.value)} />
                            <div>
                                Addtional Fare <input type="number" placeholder='100' onChange={e => setAdditionalFare(e.target.value)} />
                            </div>
                            <button onClick={() => {
                                fareUpdate()
                            }
                            }>Update</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default BaseFare