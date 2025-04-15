import React from 'react';
import { NavLink } from 'react-router';

const foodItems = [
    {
        name: "Chicken Enchilada Casserole",
        category: "Chicken",
        area: "Mexican",
        image: "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
    },
    {
        name: "Chocolate Gateau",
        category: "Dessert",
        area: "French",
        image: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
    },
    {
        name: "Cream Cheese Tart",
        category: "Starter",
        area: "American",
        image: "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
    },
    {
        name: "Christmas Pudding Flapjack",
        category: "Dessert",
        area: "British",
        image: "https://www.themealdb.com/images/media/meals/1d85821576790598.jpg",
    },
    {
        name: "Chicken Handi",
        category: "Chicken",
        area: "Indian",
        image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    },
    {
        name: "Chicken Alfredo Primavera",
        category: "Chicken",
        area: "Italian",
        image: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    },
];

const Home = () => {
    return (
        <div className="min-h-screen bg-white px-4 sm:px-8 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Popular Foods</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {foodItems.map((item, index) => (
                    <div
                        key={index}
                        className="border-2 border-amber-400 rounded-lg shadow hover:shadow-md transition duration-200 overflow-hidden"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-bold text-lg mb-1">
                                Item Name: <span className="text-gray-800">{item.name}</span>
                            </h2>
                            <p className="text-sm">
                                <strong>Category:</strong> {item.category}
                            </p>
                            <p className="text-sm mb-4">
                                <strong>Area:</strong> {item.area}
                            </p>
                            <NavLink to='/mix-foods'><button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-4 py-1 rounded">
                                View Recipe
                            </button></NavLink>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;