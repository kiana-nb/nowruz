import IconArrowLeft from '@/icons/arrow-left'
import React from 'react'

export default function BackButton({className}: {className?: string}) {
  return (
    <div className={`w-[56px] min-w-[56px] flex justify-center items-center rounded-[20px] h-[46px] bg-[#FAC821] border-b-[3px] border-[#F19C25] text-white shadow-inner shadow-white/40 ${className}`}>
        <IconArrowLeft/>
    </div>
  )
}
