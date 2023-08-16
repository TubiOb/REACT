import React from 'react'
import DetailsHeading from './DetailsHeading'
import Details from './Details'
// import MotorInsuranceTable from '../pages/MotorInsurance'

const DetailsBody = ({ selectedPolicy, setSelectedPolicy }) => {
  // const [selectedPolicy, setSelectedPolicy] = useState(null);

  const handleRowClick = (policy) => {
    setSelectedPolicy(policy);
  };

  return (
    <div className='flex flex-col w-full ml-0 md:ml-64 gap-y-0'>
        <DetailsHeading />
        {/* <MotorInsuranceTable /> */}
        <Details selectedPolicy={selectedPolicy} onRowClick={handleRowClick}/>
    </div>
  )
}

export default DetailsBody