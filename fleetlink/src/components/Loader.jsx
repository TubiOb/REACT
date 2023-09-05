import React, { useState } from 'react'
import { HashLoader } from 'react-spinners';

const Loader = ({ children }) => {
    const [loading] = useState(false);

  return (
    <div>
        {loading && (
        <div className="fixed left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 items-center justify-center">
          <HashLoader color="#36d7b7" />
        </div>
      )}

      {!loading && children}
    </div>
  )
}

export default Loader