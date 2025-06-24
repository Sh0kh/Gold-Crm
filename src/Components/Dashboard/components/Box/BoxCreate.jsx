import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";

export default function BoxCreate({ onCreate, onCancel }) {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [gram, setGram] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [closing, setClosing] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setClosing(true);
      }
    };
    const handleEsc = (event) => {
      if (event.key === "Escape") setClosing(true);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        onCancel();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [closing, onCancel]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      name,
      image: imageFile, // Можно отправить File объект или base64
      gram,
      description,
      price,
    });
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 ${closing ? "animate-fade-out" : "animate-fade-in"
        }`}
    >
      <div
        ref={modalRef}
        className={`w-full max-w-md mx-4 sm:mx-0 ${closing ? "animate-modal-out" : "animate-modal-in"
          }`}
      >
        <Card className="bg-white rounded-2xl shadow-2xl border border-gray-200">
          <CardBody>
            <Typography variant="h5" className="text-gray-900 font-bold mb-4">
              Yangi Mahsulot
            </Typography>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input label="Nomi" value={name} onChange={(e) => setName(e.target.value)} />

              <div>
                <label className="block mb-1 text-sm text-gray-700">Rasm yuklash</label>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-2 h-32 w-full object-cover rounded border"
                  />
                )}
              </div>

              <Input
                label="Gram (g)"
                type="number"
                value={gram}
                onChange={(e) => setGram(e.target.value)}
              />
              <Textarea
                label="Tavsifi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Input
                label="Narxi (UZS)"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="flex justify-end gap-2 mt-2">
                <Button variant="text" color="gray" type="button" onClick={() => setClosing(true)}>
                  Bekor qilish
                </Button>
                <Button type="submit" color="green">
                  Saqlash
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>

      <style>
        {`
        .animate-fade-in {
          animation: fadeInBg 0.3s ease;
        }
        .animate-fade-out {
          animation: fadeOutBg 0.25s ease forwards;
        }
        @keyframes fadeInBg {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOutBg {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-modal-in {
          animation: modalIn 0.3s cubic-bezier(.4,0,.2,1) forwards;
        }
        .animate-modal-out {
          animation: modalOut 0.25s cubic-bezier(.4,0,.2,1) forwards;
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes modalOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        `}
      </style>
    </div>
  );
}
