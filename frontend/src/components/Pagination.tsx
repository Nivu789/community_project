


type PaginationProps = {
    postsPerPage:number,
    totalPosts:number,
    paginate: (pageNumber:number) => void
    previousPage:()=>void
    nextPage:()=>void
    currentPage:number
}
const Pagination = ({postsPerPage,totalPosts,paginate,previousPage,nextPage,currentPage}:PaginationProps) => {
    const paginationNumbers = []

    for(let i = 1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        paginationNumbers.push(i)
    }

   

  return (
    <div className='w-full flex items-center justify-center'>
        <div className='flex gap-2 items-center'>
            <div><button onClick={previousPage} className='bg-orange-300 px-4 py-1 rounded-l-xl'>Prev</button></div>
            {paginationNumbers.map((pageNumber)=>(
            <button className={`hover:bg-blue-500 shadow-xl py-2 px-6 bg-blue-300 rounded-lg ${currentPage==pageNumber && "bg-orange-400"}`} key={pageNumber} onClick={()=>paginate(pageNumber)}>{pageNumber}</button>
            ))}
            <div><button onClick={nextPage} className='bg-orange-300 px-4 py-1 rounded-r-xl'>Next</button></div>
        </div>
        
    </div>
  )
}

export default Pagination