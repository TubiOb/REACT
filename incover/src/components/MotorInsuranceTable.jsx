import React, { useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
// import { GrFormView } from 'react-icons/gr'
// import { LiaEdit } from 'react-icons/lia'
// import { MdOutlineDeleteForever } from 'react-icons/md'
import PolicyNumber from './PolicyNumber'
import { useDataContext } from './DataContext'
import { useNavigate } from 'react-router-dom'
// import InsurancePolicyDetails from './InsurancePolicyDetails'
import Edit from '../assets/edit.svg'
import Eye from '../assets/eye.svg'
import Delete from '../assets/trash.svg'

const MotorInsuranceTable = ({ data }) => {
    const [activeRow, setActiveRow] = useState(null);

    const { setSelectedPolicy } = useDataContext();

    const navigate = useNavigate();

    const handleRowClick = (id) => {
      setActiveRow(id === activeRow ? null : id);
    };

    const handleViewClick = (policy) => {
      if (activeRow === policy.id) {
        // alert("I AM VIEW ACTIONLISTENER");
        console.log(policy.id);
          // setActiveRow(policy.id);
          setSelectedPolicy(policy);
          navigate(`/policies/details/${policy.id}`);
          
        } else {
          setActiveRow(null);
          setSelectedPolicy(null);
        }
      
    }

  return (
    <div className='w-full overflow-x-auto rounded-lg h-auto shadow-md items-center border mt-2'>
        <table className='w-full table-auto items-center md:gap-x-0 gap-x-4'>
          <thead className='text-xs md:text-sm bg-neutral-200 text-left'>
            <tr>
              <th className='p-1 md:p-4'>Policy Number</th>
              <th className='p-1 md:p-4'>Policy Provider</th>
              <th className='p-1 md:p-4'>Premium</th>
              <th className='p-1 md:p-4'>Effective Date</th>
              <th className='p-1 md:p-4'>Expiration Date</th>
              <th className='p-1 md:p-4'></th>
            </tr>
          </thead>
          <tbody className='text-xs md:text-sm font-normal hover:cursor-pointer bg-neutral-50'>
            {data.map((policy) => (
              <tr key={policy.id} className={`border-separate`} >
                <td className='p-1 md:p-4'>{policy.policyNumber}</td>
                <td className='p-1 md:p-4'>{policy.policyProvider}</td>
                <td className='p-1 md:p-4'>{policy.premium}</td>
                <td className='p-1 md:p-4'>{policy.effectiveDate}</td>
                <td className='p-1 md:p-4'>{policy.expiryDate}</td>
                <td className={`flex items-center justify-center p-1.5 md:p-4 mx-auto relative hover:cursor-pointer ${activeRow === policy.id ? '' : ''}`} onClick={() => handleRowClick(policy.id)}>
                  <CiMenuKebab size={18} className='relative'/>
                  {activeRow === policy.id && (
                    <div className='absolute bg-white z-50 rounded-lg shadow w-36 h-24 p-2 inline-flex flex-col top-[10%] right-0 transform translate-x-[-45%] items-start justify-center'>
                      <li className='inline-flex items-center justify-start self-stretch p-2 gap-2 text-xs md:text-sm font-medium hover:cursor-pointer hover:bg-green-200 hover:text-green-800 hover:rounded-md hover:font-semibold' onClick={() => handleViewClick(policy)}>
                        <div className="Edit w-4 h-4 relative">
                            <img src={Edit} alt='' className="Edit w-4 h-4 left-0 top-0 absolute"/>
                        </div>
                        <div className="CompleteCaims text-neutral-600 text-sm font-normal font-['Red Hat Display'] leading-tight">Edit details</div>
                      </li>
                      <li className='inline-flex items-center justify-start self-stretch p-2 gap-2 text-xs md:text-sm font-medium hover:cursor-pointer hover:bg-green-200 hover:text-green-800 hover:rounded-md hover:font-semibold'>
                        <div className="Edit w-4 h-4 relative">
                            <img src={Eye} alt='' className="Edit w-4 h-4 left-0 top-0 absolute"/>
                        </div>
                        <div className="CompleteCaims text-neutral-600 text-sm font-normal font-['Red Hat Display'] leading-tight">View details</div>
                      </li>
                      <li className='inline-flex items-center justify-start self-stretch p-2 gap-2 text-xs md:text-sm font-medium hover:cursor-pointer hover:bg-green-200 hover:text-green-800 hover:rounded-md hover:font-semibold'>
                        <div className="Edit w-4 h-4 relative">
                            <img src={Delete} alt='' className="Edit w-4 h-4 left-0 top-0 absolute"/>
                        </div>
                        <div className="Terminate text-red-700 text-sm font-normal font-['Red Hat Display'] leading-tight">Delete</div>
                      </li>
                      <PolicyNumber policy={policy} />
                      {/* <InsurancePolicyDetails policy={policy} /> */}
                    </div>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default MotorInsuranceTable