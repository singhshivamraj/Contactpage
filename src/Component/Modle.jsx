import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {createPortal} from 'react-dom'

function Modle( {onClose, isOpen, children}) {
  return createPortal (
  <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur ">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[25%] bg-[#03030395] p-4 rounded-xl">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl cursor-pointer text-white"  />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modle-root")
  );
};

export default Modle