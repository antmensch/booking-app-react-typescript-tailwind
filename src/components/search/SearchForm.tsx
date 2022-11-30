import React, { useState } from "react";
import { MdHotel } from "react-icons/md";

export default function SearchForm() {
    const [searchData, setSearchData] = useState({
        guestsQty: 1,
        checkin: null,
        checkout: null,
        location: "",
    });

    function handleChange(e: any) {
        setSearchData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log(searchData);
    }

    return (
        <div className="mx-5 rounded-2xl bg-white py-5 dark:bg-darkGray-300">
            <form className="flex flex-col px-5">
                <div className="flex flex-row items-center border-b-1 border-lightGray-400 p-5 dark:border-darkGray-600 dark:text-lightGray-500">
                    <MdHotel />
                    <span className="ml-2 text-sm">Hotel</span>
                    <select
                        className="ml-2 cursor-pointer bg-white focus:outline-none dark:bg-darkGray-300"
                        name="guestsQty"
                        id="guestsQty"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    >
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                        <option value="6">6 guests</option>
                    </select>
                </div>

                {/* Text inputs */}
                <div className="flex flex-col pt-5 md:flex-row md:space-x-2">
                    <div className="relative w-full py-2">
                        <div className="absolute left-[13px] top-3 text-darkGray-100 dark:text-lightGray-600">
                            Location
                        </div>
                        <input
                            type="text"
                            name="location"
                            className="input-text mt-0 w-full border-1 border-lightGray-300 pt-8 text-lightGray-300 dark:border-opacity-0 dark:bg-darkGray-600 dark:text-lightGray-100"
                            placeholder="Where are you from?"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-row justify-between space-x-2 overflow-scroll py-2">
                        <div className="relative w-1/2">
                            <div className="absolute left-[13px] top-2 text-darkGray-100 dark:text-lightGray-600">
                                Check In
                            </div>
                            <input
                                type="text"
                                name="checkin"
                                className="input-text mt-0 w-full border-1 border-lightGray-300 pt-8 text-lightGray-300 dark:border-opacity-0 dark:bg-darkGray-600 dark:text-lightGray-100"
                                placeholder="Add date"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                        <div className="relative w-1/2">
                            <div className="absolute left-[13px] top-2 text-darkGray-100 dark:text-lightGray-600">
                                Check Out
                            </div>
                            <input
                                type="text"
                                name="checkout"
                                className="input-text mt-0 w-full border-1 border-lightGray-300 pt-8 text-lightGray-300 dark:border-opacity-0 dark:bg-darkGray-600 dark:text-lightGray-100"
                                placeholder="Add date"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                    </div>
                    <div className="py-2">
                        <button
                            className="w-full rounded-lg bg-blue-accent px-10 py-5 font-medium text-white hover:bg-blue-dark"
                            onClick={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
