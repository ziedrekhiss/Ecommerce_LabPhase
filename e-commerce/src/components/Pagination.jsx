import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function Pagination({currentPage, itemPerPage, totalItems, onPageChange}) {

    const totalPages = Math.ceil(totalItems / itemPerPage);

    const handlePageChange = (newPage) => {
      onPageChange(newPage);
    };
  
    return (
      <div
        style={{display:'flex', alignItems:"center", paddingTop:"5px"}}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <MdNavigateBefore size={30} />
        </button>
        <span 
          style={{fontSize:"18px", fontWeight:'bold', padding:'0 5px 0 5px'}}>
            {currentPage}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <MdNavigateNext size={30} />
        </button>
      </div>
  )
}
