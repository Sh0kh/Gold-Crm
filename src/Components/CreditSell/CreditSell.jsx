import React, { useEffect, useState } from "react";

const initialProducts = [
    {
        id: 1,
        name: "Yurak Kulonli Tilla",
        image: "https://media.istockphoto.com/id/487138638/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9-%D1%81-%D0%BA%D1%83%D0%BB%D0%BE%D0%BD%D0%BE%D0%BC-%D0%B2-%D0%B2%D0%B8%D0%B4%D0%B5-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%87%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=D9JFGgXYfRRvEQH8nYvsy6sBVYAZsDrWXa-gkmSXqFI=",
        price: 1450000,
        gram: 18,
        category: "Tilla",
    },
    {
        id: 2,
        name: "Oddiy Kumush Zanjir",
        image: "https://ireland.apollo.olxcdn.com/v1/files/hjbnrpkvkax21-UA/image",
        price: 620000,
        gram: 12,
        category: "Kumush",
    },
    {
        id: 3,
        name: "Zanjir Ayollar Uchun",
        image: "https://images.prom.ua/2386578434_w600_h600_2386578434.jpg",
        price: 770000,
        gram: 15,
        category: "Tilla",
    },
];

// Случайная дата
function getRandomDate() {
    const start = new Date(2024, 11, 1); // 1 декабрь 2024
    const end = new Date();
    const random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return random.toLocaleDateString("uz-UZ", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}

// Случайные клиенты
const sampleUsers = [
    { name: "Aliyev Jamshid", phone: "+998 91 123 45 67" },
    { name: "Islomova Dildora", phone: "+998 93 456 78 90" },
    { name: "Karimov Aziz", phone: "+998 99 321 65 43" },
    { name: "Saidova Mohira", phone: "+998 90 555 55 55" },
];

function getRandomUser() {
    const index = Math.floor(Math.random() * sampleUsers.length);
    return sampleUsers[index];
}

export default function CreditSell() {
    const [soldProducts, setSoldProducts] = useState([]);

    useEffect(() => {
        const productsWithSales = initialProducts.map((product) => {
            const soldPrice = product.price + Math.floor(Math.random() * 300000);
            const profit = soldPrice - product.price;
            const user = getRandomUser();

            return {
                ...product,
                soldDate: getRandomDate(),
                soldPrice,
                profit,
                customerName: user.name,
                customerPhone: user.phone,
            };
        });

        setSoldProducts(productsWithSales);
    }, []);

    return (
        <div className="mt-[90px] p-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Sotuv Tarixi</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {soldProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                            <p className="text-gray-600">
                                <span className="font-medium">Kategoriya:</span> {product.category}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Og'irlik:</span> {product.gram}g
                            </p>
                            <div className="text-sm space-y-1">
                                <p>
                                    <span className="font-medium text-gray-700">Narx:</span>{" "}
                                    {product.price.toLocaleString()} so'm
                                </p>
                                <p>
                                    <span className="font-medium text-blue-700">Sotuv narxi:</span>{" "}
                                    {product.soldPrice.toLocaleString()} so'm
                                </p>
                                <p>
                                    <span className="font-medium text-green-700">Foyda:</span>{" "}
                                    {product.profit.toLocaleString()} so'm
                                </p>
                            </div>
                            <p className="text-gray-500 text-sm">
                                <span className="font-medium">Sotilgan sana:</span> {product.soldDate}
                            </p>
                            <p className="text-gray-500 text-sm">
                                <span className="font-medium">Xaridor:</span> {product.customerName}
                            </p>
                            <p className="text-gray-500 text-sm">
                                <span className="font-medium">Telefon:</span> {product.customerPhone}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
