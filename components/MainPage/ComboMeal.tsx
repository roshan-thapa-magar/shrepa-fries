import React from 'react'
import { CircleChevronLeft,CircleChevronRight } from 'lucide-react';

export default function ComboMeal() {
  return (
    <div>
      <div className='flex justify-between items-center py-4'>
        <span className='text-xl font-extrabold'>Combo Meals</span>
        <div className='flex items-center gap-4'>
            <p className='font-extrabold'>See all</p>
            <div className='flex items-center gap-2 text-gray-500'>
                <CircleChevronLeft />
                <CircleChevronRight />
            </div>
        </div>
      </div>
    </div>
  )
}
