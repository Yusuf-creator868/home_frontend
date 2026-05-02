import { useState } from "react";
import axios from "axios";
import api from "../api";
import Select from "react-select";

export default function CreateHome() {
    const [step, setStep] = useState(1);
    const [homeId, setHomeId] = useState(null);
    const typeOptions = [
        { value: "rent", label: "Rent" },
        { value: "sale", label: "Sale" },
    ];

    const [form, setForm] = useState({
        district: "",
        rooms: "",
        price: "",
        description: "",
        type: "",
    });

    const next = () => setStep((s) => s + 1);
    const back = () => setStep((s) => s - 1);

    const createDraft = async () => {
        const res = await api.post("/create_home/");
        setHomeId(res.data.id);
        next();
    };

    const updateHome = async () => {
        await api.patch(`/update_home/${homeId}`, form);
        next();
    };

    // const uploadImages = async (files) => {
    //     const formData = new FormData();
    //     files.forEach((f) => formData.append("images", f));

    //     await api.post(`/uploadimage_home/${homeId}`, formData);
    //     next();
    // };

    const uploadImages = async (files) => {
    const formData = new FormData();

    files.forEach((f) => {
        formData.append("images", f);
    });

    await api.post(
        `/uploadimage_home/${homeId}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    next();
};

    const publish = async () => {
        await api.post(`/upload_home/${homeId}`);
        alert("Published!");
    };

    const progress = (step / 5) * 100;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div
                            className="h-2 bg-black rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Create Your Listing
                </h2>

                {/* STEP 1 */}
                {step === 1 && (
                    <div className="text-center">
                        <p className="mb-6 text-gray-600">
                            Let’s start by creating your listing
                        </p>
                        <button
                            onClick={createDraft}
                            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
                        >
                            Start
                        </button>
                    </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <div className="space-y-4">
                        <Select
                            options={typeOptions}
                            onChange={(option) => setForm({ ...form, type: option?.value})}
                            className="w-35"
                        />
                        <input
                            placeholder="District"
                            value={form.district}
                            onChange={(e) =>
                                setForm({ ...form, district: e.target.value })
                            }
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <input
                            placeholder="Rooms"
                            value={form.rooms}
                            onChange={(e) =>
                                setForm({ ...form, rooms: e.target.value })
                            }
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <button
                            onClick={updateHome}
                            className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <div className="space-y-4">
                        <input
                            type="file"
                            multiple
                            onChange={(e) =>
                                uploadImages([...e.target.files])
                            }
                            className="w-full border p-3 rounded-xl"
                        />

                        <p className="text-sm text-gray-500">
                            Upload high-quality images for better visibility
                        </p>
                    </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                    <div className="space-y-4">
                        <input
                            placeholder="Price"
                            value={form.price}
                            onChange={(e) =>
                                setForm({ ...form, price: e.target.value })
                            }
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <textarea
                            placeholder="Description"
                            value={form.description}
                            onChange={(e) =>
                                setForm({ ...form, description: e.target.value })
                            }
                            className="w-full border rounded-xl p-3 h-28 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <button
                            onClick={updateHome}
                            className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* STEP 5 */}
                {step === 5 && (
                    <div className="text-center">
                        <p className="mb-6 text-gray-600">
                            Review your listing and publish it
                        </p>
                        <button
                            onClick={publish}
                            className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
                        >
                            Publish
                        </button>
                    </div>
                )}

                {/* Navigation */}
                {step > 1 && (
                    <button
                        onClick={back}
                        className="mt-6 text-sm text-gray-500 hover:text-black"
                    >
                        ← Back
                    </button>
                )}
            </div>
        </div>
    );
}