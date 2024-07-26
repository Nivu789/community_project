import React, { MouseEventHandler, useState } from 'react'


type PaginationProps = {
    postsPerPage:number,
    length:number,
}
const Pagination = ({postsPerPage,length}:PaginationProps) => {
    const paginationNumbers = []
    const [currentPage,setCurrentPage] = useState(1)

    for(let i = 1;i<=Math.ceil(length/postsPerPage);i++){
        paginationNumbers.push(i)
    }

    const handlePagination = (pageNumber:number) =>{
        setCurrentPage(pageNumber)
    }

  return (
    <div>
        {paginationNumbers.map((pageNumber)=>(
            <button key={pageNumber} onClick={()=>handlePagination(pageNumber)}>{pageNumber}</button>
        ))}
    </div>
  )
}

export default Pagination