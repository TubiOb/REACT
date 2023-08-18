import React, { useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import { GrFormView } from 'react-icons/gr'
import { LiaEdit } from 'react-icons/lia'
import { MdOutlineDeleteForever } from 'react-icons/md'
import PolicyNumber from './PolicyNumber'
import { useDataContext } from './DataContext'
import { useNavigate } from 'react-router-dom'
import InsurancePolicyDetails from './InsurancePolicyDetails'

const Table = ({ data }) => {
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
    // <div className='overflow-x-auto md:overflow-x-hidden rounded-lg shadow-md border mt-2'>
      <table className=' table-auto w-full items-center md:gap-x-0 gap-x-4 overflow-x-auto md:overflow-x-hidden rounded-lg shadow-md border mt-2'>
        <thead className='text-sm bg-neutral-200'>
          <tr>
            <th className='p-1 md:p-4'>Policy Number</th>
            <th className='p-1 md:p-4'>Policy Type</th>
            <th className='p-1 md:p-4'>Policy Provider</th>
            <th className='p-1 md:p-4'>Premium</th>
            <th className='p-1 md:p-4'>Effective Date</th>
            <th className='p-1 md:p-4'>Expiration Date</th>
            <th className='p-1 md:p-4'></th>
          </tr>
        </thead>
        <tbody className='text-xs md:text-sm font-normal hover:cursor-pointer bg-neutral-50 overflow-hidden'>
          {data.map((policy) => (
            <tr key={policy.id} className='border-separate'>
              <td className='p-1 md:p-4'>{policy.policyNumber}</td>
              <td className='p-1 md:p-4'>{policy.policyType}</td>
              <td className='p-1 md:p-4'>{policy.policyProvider}</td>
              <td className='p-1 md:p-4'>{policy.premium}</td>
              <td className='p-1 md:p-4'>{policy.effectiveDate}</td>
              <td className='p-1 md:p-4'>{policy.expiryDate}</td>
              <td className={`flex items-center justify-center p-1.5 md:p-4 mx-auto relative hover:cursor-pointer ${activeRow === policy.id ? '' : ''}`} onClick={() => handleRowClick(policy.id, policy)}>
                <CiMenuKebab size={18} className='relative'/>
                {activeRow === policy.id && (
                  <div className='absolute bg-white z-50 rounded-lg shadow-xl p-1 w-24 flex flex-col top-[10%] right-0 transform translate-x-[-45%] items-center justify-between text-center border-separate gap-1'>
                    <li className='flex items-center justify-center w-[90%] mx-auto text-center p-0.5 gap-1 text-xs md:text-sm font-medium hover:cursor-pointer hover:bg-green-200 hover:text-green-700 hover:rounded-md hover:font-semibold' onClick={() => handleViewClick(policy)}>
                      <GrFormView size={20} /> View
                    </li>
                    <li className='flex items-center justify-center w-[90%] mx-auto text-center p-0.5 gap-1 text-xs md:text-sm font-medium hover:cursor-pointer hover:bg-green-200 hover:text-green-700 hover:rounded-md hover:font-semibold'>
                      <LiaEdit size={20} color='green' /> Edit
                    </li>
                    <li className='flex items-center justify-center w-[90%] mx-auto text-center p-0.5 gap-1 text-xs md:text-sm font-medium hover:cursor-pointer hover:bg-green-200 hover:text-green-700 hover:rounded-md hover:font-semibold'>
                      <MdOutlineDeleteForever size={20} color='red' /> Delete
                    </li>
                    <PolicyNumber policy={policy} />
                    <InsurancePolicyDetails policy={policy} />
                  </div>
                )}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    // </div>
   
  )
}

export default Table