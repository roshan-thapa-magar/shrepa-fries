import React from 'react'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import Image from "next/image";

const items = [
    {
        id: 1,
        image: "/food/image1.png",
        title: "Current Noodles & Non-Veg Combo ( 8-10 People )",
        description: "Chicken 65 Biryani X2, Crispy Chicken Burger, Buffalo Chicken Wings (6Pcs.)...",
        price: "3999",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyl5jrFc3LzhI0kHV3SQm5E-FfWIOTW4KReA&s",
        title: "Veg Combo Meal ( 4-6 People )",
        description: "Vegetable Biryani X2, Paneer Tikka, Garlic Bread Sticks...",
        price: "2499",
    },
    {
        id: 3,
        image: "https://tkcfoods.com/cdn/shop/products/vegcombo_1080x.png.jpg?v=1626874169",
        title: "Seafood Special Combo ( 6-8 People )",
        description: "Fish Tikka, Prawn Biryani, Grilled Lobster...",
        price: "4999",
    },
    {
        id: 4,
        image: "https://www.recipetineats.com/tachyon/2023/12/Seafood-Platter_Sony-5.jpg",
        title: "Family Combo ( 10-12 People )",
        description: "Chicken Tikka, Mutton Biryani, Samosas (12 pcs), Soft Drinks...",
        price: "6999",
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqTeD4KEZ_ahv2l9C1QCzCwHAPaQA95g4yA&s",
        title: "Vegetarian Feast Combo ( 8-10 People )",
        description: "Paneer Butter Masala, Dal Makhani, Naan, Raita...",
        price: "3599",
    },
    {
        id: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCqHH38CajH9gdcosD9hZHslFUZOduck3Lg&s",
        title: "Mixed Combo Meal ( 6-8 People )",
        description: "Chicken Wings, Fries, Veg Pulao, Veg Spring Rolls...",
        price: "2999",
    }
];

export default function ComboMeal() {
    return (
        <div>
            <div className='flex justify-between items-center py-4'>
                <span className='text-xl font-extrabold'>Combo Meals</span>
                <div className='flex items-center gap-4'>
                    <p className='font-extrabold text-blue-600 cursor-pointer'>See all</p>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <CircleChevronLeft aria-label="Previous Combo Meal" />
                        <CircleChevronRight aria-label="Next Combo Meal" />
                    </div>
                </div>
            </div>
            <div className="flex overflow-x-auto hide-scrollbar space-x-4 py-2">
                {items.map(item => (
                    <div
                        key={item.id}
                        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-[23%] border-2 border-gray-300 rounded-lg transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-lg"
                    >
                        <div className="relative w-full rounded-t-lg h-48 sm:h-56 md:h-60 lg:h-48 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="100vw"
                                className="object-cover transition-opacity duration-1000 ease-in-out"
                                priority
                            />
                        </div>
                        <div className="p-4">
                            <span className="font-bold text-lg mb-4 block">{item.title}</span>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <span className='font-extrabold mt-4 block text-lg'>RS. {item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
