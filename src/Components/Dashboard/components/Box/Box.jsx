import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import BoxCreate from "./BoxCreate";
import BoxEdit from "./BoxEdit";
import BoxDelete from "./BoxDelete";
import { NavLink } from "react-router-dom";

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

export default function Box() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const handleCreate = (product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
    setOpenCreate(false);
  };

  const handleEdit = (product) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === product.id ? product : item))
    );
    setOpenEdit(false);
    setEditProduct(null);
  };

  const handleEditOpen = (product) => {
    setEditProduct(product);
    setOpenEdit(true);
  };

  const handleDeleteOpen = (product) => {
    setDeleteProduct(product);
    setOpenDelete(true);
  };

  const handleDelete = (productId) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
    setOpenDelete(false);
    setDeleteProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen mt-[90px] mb-[20px] p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Typography variant="h3" className="text-gray-900 font-bold">
          Mahsulotlar
        </Typography>
        <div className="flex items-center gap-[10px]">
          <Button
            color="green"
            className="flex items-center gap-2"
            onClick={() => setOpenCreate(true)}
            size="sm"
          >
            <PlusIcon className="w-5 h-5" />
            Tila
          </Button>
          <Button
            color="green"
            className="flex items-center gap-2"
            onClick={() => setOpenCreate(true)}
            size="sm"
          >
            <PlusIcon className="w-5 h-5" />
            Kumush
          </Button>
        </div>
      </div>

      <div className="w-full mt-6 mb-6">
        <input
          type="text"
          placeholder="Qidirish (nomi bo'yicha)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="w-full bg-white rounded-3xl shadow-xl border border-gray-200 flex flex-col hover:shadow-2xl transition"
          >
            <CardBody className="flex flex-col items-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <Typography variant="h6" className="font-bold text-gray-800 text-center">
                {product.name}
              </Typography>
              <Typography className="text-sm text-gray-700 mt-1">
                Narxi: {product.price.toLocaleString()} UZS
              </Typography>
              <Typography className="text-sm text-gray-700 mt-1">
                Og'irligi: {product.gram} gram
              </Typography>
              <Typography className="text-sm text-gray-700 mt-1 mb-4">
                Kategoriya: {product.category}
              </Typography>
              <div className="flex gap-2 mt-auto">
                <NavLink to={'/sell'}>
                  <IconButton
                    variant="text"
                    color="green"
                    size="sm"
                  >
                    <CurrencyDollarIcon className="w-6 h-6" />
                  </IconButton>
                </NavLink>
                <IconButton
                  variant="text"
                  color="blue"
                  onClick={() => handleEditOpen(product)}
                  size="sm"
                >
                  <PencilIcon className="w-5 h-5" />
                </IconButton>
                <IconButton
                  variant="text"
                  color="red"
                  onClick={() => handleDeleteOpen(product)}
                  size="sm"
                >
                  <TrashIcon className="w-5 h-5" />
                </IconButton>
              </div>

            </CardBody>
          </Card>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 italic mt-8">
            Mahsulot topilmadi
          </div>
        )}
      </div>

      {openCreate && (
        <BoxCreate
          onCreate={handleCreate}
          onCancel={() => setOpenCreate(false)}
        />
      )}
      {openEdit && editProduct && (
        <BoxEdit
          product={editProduct}
          onEdit={handleEdit}
          onCancel={() => {
            setOpenEdit(false);
            setEditProduct(null);
          }}
        />
      )}
      {openDelete && deleteProduct && (
        <BoxDelete
          product={deleteProduct}
          onDelete={handleDelete}
          onCancel={() => {
            setOpenDelete(false);
            setDeleteProduct(null);
          }}
        />
      )}
    </div>
  );
}
