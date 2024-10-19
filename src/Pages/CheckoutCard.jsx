// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { hostelData } from '../assets/hostel-data';
import { FaWifi } from "react-icons/fa";
import { IoMdTv } from "react-icons/io";
import { TbToolsKitchen2, TbAirConditioning } from "react-icons/tb";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CheckoutCard = () => {
    const { CheckoutCardId } = useParams();
    const product = hostelData.find(item => item.id === parseInt(CheckoutCardId));
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [pets, setPets] = useState(0);
    const [adults, setAdults] = useState(1);
    const [showCarousel, setShowCarousel] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [
        product.image,
        product.image2,
        product.image3,
        product.image4,
        product.image5,
        product.image6,
        product.image7,
        product.image8,
        product.image9,
        product.image10,
        product.image11,
        product.image12,
        product.image13,
        product.image14,
        product.image15,
        product.image16,
        product.image17,
        product.image18,
        product.image19,
        product.image20,
        product.image21,
        product.image22,
        product.image23,
        product.image24,
        product.image25,
        product.image26,
        product.image27,
    ].filter(Boolean);

    const handleOpenCarousel = () => {
        if (images.length > 0) {
            setShowCarousel(true);
        }
    };

    const handleCloseCarousel = () => {
        setShowCarousel(false);
    };

    const renderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#FFA282] hover:bg-[#E57A5a] text-white p-2 rounded-full z-50 opacity-75 hover:opacity-100"
                aria-label={label}
            >
                &lt;
            </button>
        );

    const renderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FFA282] hover:bg-[#E57A5a] text-white p-2 rounded-full z-50 opacity-75 hover:opacity-100"
                aria-label={label}
            >
                &gt;
            </button>
        );

    return (
        <div className="max-w-6xl mx-auto px-4 py-9">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 mr-3">
                    <div className="grid grid-cols-2 gap-4">
                        {images.slice(0, 6).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                        ))}
                    </div>
                    {images.length > 0 && (
                        <button
                            onClick={handleOpenCarousel}
                            className="w-full bg-[#FFA282] hover:bg-[#E57A5a] text-white p-3 rounded-xl font-bold"
                        >
                            View Photos
                        </button>
                    )}
                </div>
                <div className="h-min shadow-md rounded-xl p-5">
                    <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                    <p className="mb-2 text-sm">
                        {product.hóspedes} Guests • {product.quartos} Bedroom •{" "}
                        {product.camas} Bed • {product.casa_banho} Bathroom
                    </p>
                    <p className="font-bold text-2xl mb-4">{product.price} Per night</p>
                    <div className="border rounded p-4 mb-4">
                        <h2 className="font-bold mb-2">DATES</h2>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="Check-in"
                            className="w-full border p-2 rounded mb-2"
                            dateFormat={"dd/MM/yyyy"}
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText="Check-out"
                            className="w-full border p-2 rounded"
                            dateFormat={"dd/MM/yyyy"}
                        />
                    </div>

                    <div className="border rounded p-4 mb-4">
                        <div className="flex justify-between items-center">
                            <span>Guests</span>
                            <div className="flex items-center">
                                <button onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>-</button>
                                <span className="mx-2">{adults}</span>
                                <button onClick={() => setAdults(adults + 1)}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded p-4 mb-4">
                        <div className="flex justify-between items-center">
                            <span>Animals</span>
                            <div className="flex items-center">
                                <button onClick={() => setPets(pets > 0 ? pets - 1 : 0)}>-</button>
                                <span className="mx-2">{pets}</span>
                                <button onClick={() => setPets(pets + 1)}>+</button>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#FFA282] hover:bg-[#E57A5a] text-white p-3 rounded-xl font-bold">
                        Book Now
                    </button>
                </div>
            </div>
            <div className="mt-8 border-b-2 py-4">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p>{product.descrição}</p>
                <p className="mt-4">
                    Nº Local Accommodation Registration: {product.registrationNumber}
                </p>
            </div>
            <div className="mt-8 border-b-2 py-6 flex flex-col gap-5">
                <h2 className="text-xl font-bold mb-4">Amenities</h2>
                <div className="flex items-center justify-between px-9">
                    <span className="flex items-center gap-2">
                        <FaWifi /> Wifi
                    </span>
                    <span className="flex items-center gap-2">
                        <IoMdTv /> TV
                    </span>
                    <span className="flex items-center gap-2">
                        <TbToolsKitchen2 /> Kitchen
                    </span>
                    <span className="flex items-center gap-2">
                        <TbAirConditioning /> Air conditioning or heating
                    </span>
                </div>
            </div>
            {showCarousel && images.length > 0 && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <button
                        onClick={handleCloseCarousel}
                        className="absolute top-4 right-4 bg-[#FFA282] hover:bg-[#E57A5a] text-white py-2 px-4 rounded opacity-75 hover:opacity-100 z-50"
                    >
                        Close
                    </button>
                    <Carousel
                        showThumbs={false}
                        dynamicHeight={true}
                        renderArrowPrev={renderArrowPrev}
                        renderArrowNext={renderArrowNext}
                    >
                        {images.map((img, index) => (
                            <div key={index} className="w-full h-screen">
                                <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
};

export default CheckoutCard;