import React, { useState } from "react";
import {
    Card,
    CardBody,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";

export default function Sell() {
    const [buyerName, setBuyerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [sellPrice, setSellPrice] = useState("");

    const product = {
        name: "Oltin Ojereliya",
        price: "5 500 000 so'm",
        gram: "15g",
        description:
            "Yurak shaklidagi zamonaviy oltin kulon. Har qanday bayram yoki sovg'a uchun mukammal tanlov.",
        image:
            "https://media.istockphoto.com/id/487138638/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9-%D1%81-%D0%BA%D1%83%D0%BB%D0%BE%D0%BD%D0%BE%D0%BC-%D0%B2-%D0%B2%D0%B8%D0%B4%D0%B5-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%87%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=D9JFGgXYfRRvEQH8nYvsy6sBVYAZsDrWXa-gkmSXqFI=",
    };

    const handleSell = () => {
        if (!buyerName || !phoneNumber || !sellPrice) {
            alert("Iltimos, barcha maydonlarni to‘ldiring.");
            return;
        }

        const numericPrice = parseInt(sellPrice.replace(/\s/g, ""));
        console.log("Sotildi:", {
            buyerName,
            phoneNumber,
            price: numericPrice,
        });
        alert("Mahsulot muvaffaqiyatli sotildi!");
    };

    const formatPrice = (value) => {
        const onlyNumbers = value.replace(/\D/g, "");
        return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const handlePriceChange = (e) => {
        const formatted = formatPrice(e.target.value);
        setSellPrice(formatted);
    };

    return (
        <div className="min-h-screen mt-[80px] bg-gray-50 flex flex-col gap-6 items-center px-4 py-6">
            {/* Mahsulot haqida */}
            <Card className="w-full max-w-2xl shadow-lg rounded-xl p-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-left">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-48 h-48 object-cover rounded-2xl shadow-md"
                    />
                    <div className="flex flex-col gap-2">
                        <Typography variant="h5" color="blue-gray" className="font-bold">
                            {product.name}
                        </Typography>
                        <Typography variant="h6" color="green" className="font-semibold">
                            {product.price}
                        </Typography>
                        <Typography color="blue-gray">
                            <span className="font-medium">Og'irligi:</span> {product.gram}
                        </Typography>
                        <Typography className="text-gray-700 text-sm max-w-md">
                            {product.description}
                        </Typography>
                    </div>
                </div>
            </Card>

            {/* Sotish formasi */}
            <Card className="w-full max-w-2xl shadow-lg rounded-xl p-6">
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <Typography className="mb-2 font-medium text-blue-gray-700">
                            Mijoz ismi
                        </Typography>
                        <Input
                            label="Masalan: Aziza Karimova"
                            value={buyerName}
                            onChange={(e) => setBuyerName(e.target.value)}
                        />
                    </div>
                    <div>
                        <Typography className="mb-2 font-medium text-blue-gray-700">
                            Telefon raqami
                        </Typography>
                        <Input
                            label="+998 __ ___ __ __"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <Typography className="mb-2 font-medium text-blue-gray-700">
                            Sotuv narxi
                        </Typography>
                        <Input
                            label="Masalan: 5 500 000"
                            type="text"
                            value={sellPrice}
                            onChange={handlePriceChange}
                        />
                    </div>
                    <Button color="green" fullWidth onClick={handleSell}>
                        Mahsulotni sotish
                    </Button>
                </form>
            </Card>
        </div>
    );
}
