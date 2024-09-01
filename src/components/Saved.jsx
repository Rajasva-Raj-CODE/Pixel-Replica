import React from 'react'
import Loader from './Loader'

const Saved = ({saved,loader}) => {
  return (
    <>
     <div className="container_fluid text-center" id="top">
        {loader | saved.lenght ===0? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {saved.map((image) => (
                <div
                  key={image.id}
                  className="items"
                >
                  <img src={image.src.medium} alt="photography" />
                </div>
              ))}
            </div>
          </>
        )}

        {saved.lenght != 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To TOP
          </a>
        )}
      </div>
    </>
  )
}

export default Saved