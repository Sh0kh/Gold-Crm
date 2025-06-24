import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography, Input, Button } from "@material-tailwind/react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

export default function Debtors() {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        // ✅ Фейковые данные
        const fakeData = [
            { name: "Ojereliye A", type: "ожерелие", date: "2025-06-01", sold: 5, earned: 1000000 },
            { name: "Ojereliye B", type: "ожерелие", date: "2025-06-05", sold: 3, earned: 600000 },
            { name: "Ojereliye C", type: "ожерелие", date: "2025-06-10", sold: 7, earned: 1400000 },
            { name: "Ojereliye D", type: "ожерелие", date: "2025-06-15", sold: 2, earned: 400000 },
            { name: "Ojereliye E", type: "ожерелие", date: "2025-06-20", sold: 8, earned: 1600000 },
            { name: "Ojereliye F", type: "ожерелие", date: "2025-06-25", sold: 6, earned: 1200000 },
            { name: "Ojereliye G", type: "ожерелие", date: "2025-06-30", sold: 4, earned: 800000 },
            // 🎯 Примеры других типов — будут отброшены
            { name: "Toaster", type: "бытовая техника", date: "2025-06-12", sold: 10, earned: 2000000 },
        ];

        const onlyNecklaces = fakeData
            .filter(item => item.type === "ожерелие")
            .map(item => ({
                ...item,
                date: dayjs(item.date).format("DD.MM.YYYY"),
            }));

        setData(onlyNecklaces);
        setFiltered(onlyNecklaces);
    }, []);

    const handleFilter = () => {
        const start = startDate ? dayjs(startDate) : null;
        const end = endDate ? dayjs(endDate) : null;

        const filteredData = data.filter(item => {
            const itemDate = dayjs(item.date, "DD.MM.YYYY");
            return (!start || itemDate.isAfter(start.subtract(1, "day"))) &&
                (!end || itemDate.isBefore(end.add(1, "day")));
        });

        setFiltered(filteredData);
    };

    const totalSold = filtered.reduce((sum, item) => sum + item.sold, 0);
    const totalEarned = filtered.reduce((sum, item) => sum + item.earned, 0);

    return (
        <div className="p-4 space-y-6 mt-[90px]">
            <Typography variant="h4" color="blue-gray">Statistika: Tila bo‘yicha</Typography>

            <div className="flex flex-col sm:flex-row gap-4">
                <Input
                    label="Boshlanish sanasi"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <Input
                    label="Tugash sanasi"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <Button onClick={handleFilter} className="w-full sm:w-auto mt-1">Filter</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardBody>
                        <Typography variant="h6">Umumiy sotilgan:</Typography>
                        <Typography variant="h4" color="green">{totalSold} dona</Typography>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Typography variant="h6">Umumiy daromad:</Typography>
                        <Typography variant="h4" color="blue">{totalEarned.toLocaleString()} so‘m</Typography>
                    </CardBody>
                </Card>
            </div>

            <div className="text-sm text-gray-600 text-center">
                {startDate && endDate
                    ? `Davr: ${dayjs(startDate).format("DD.MM.YYYY")} - ${dayjs(endDate).format("DD.MM.YYYY")}`
                    : "Barcha davrlar uchun statistikalar ko‘rsatilgan"}
            </div>

            <Card>
                <CardBody>
                    <Typography variant="h6" className="mb-4">Oylik tahlil (Line Chart)</Typography>
                    <div className="w-full h-[300px]">
                        <ResponsiveContainer>
                            <LineChart data={filtered}>
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="sold" stroke="#8884d8" name="Sotilgan" />
                                <Line type="monotone" dataKey="earned" stroke="#82ca9d" name="Daromad" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
