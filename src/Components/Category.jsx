import React from 'react'
import {CategoryData} from '../Data'
import CategoryCard from './CategoryCard'

const Category = () => {
  return (
  <>
  <div className="container-xxl py-5">
    <div className="container section_title">
        <h6 className=' text-center px-3 mb-3'>Categories</h6>
        <h2 className='mb-5'>Course Category</h2>
        <div className="row gy-5 mb-2">  
          {
            CategoryData.map((x)=>{
                return(
                    <CategoryCard
                      key={x.cid}
                      title={x.title}
                      Catimg={x.Catimg}
                    />
                )
            })
          }  
        </div>
    </div>
  </div>
  </>
  )
}

export default Category