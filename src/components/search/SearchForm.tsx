import React, { BaseSyntheticEvent, useState } from "react";
import { MdHotel } from "react-icons/md";
import DatePicker, { registerLocale } from "react-datepicker";
import gb from "date-fns/locale/en-GB";
import add from "date-fns/add";

export default function SearchForm() {
    const [searchData, setSearchData] = useState({
        guestsQty: 1,
        checkin: new Date(),
        checkout: add(new Date(), { days: 7 }),
        location: "",
    });

    registerLocale("gb", gb);

    function handleChange(e: any) {
        setSearchData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    }

    function handleCheckinChange(date: Date | null, e: any) {
        if (date === null) return;
        setSearchData((prev) => {
            return {
                ...prev,
                checkin: date,
            };
        });
    }

    function handleCheckoutChange(date: Date | null, e: any) {
        if (date === null) return;
        setSearchData((prev) => {
            return {
                ...prev,
                checkout: date,
            };
        });
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log(searchData);
    }

    return (
        <div className="mx-5 rounded-2xl bg-white pb-7 dark:bg-darkGray-300">
            <form className="flex flex-col px-5">
                <div className="flex flex-row items-center border-b-1 border-lightGray-400 p-5 dark:border-darkGray-600 dark:text-lightGray-500">
                    <MdHotel />
                    <span className="ml-2 text-sm">Hotel</span>
                    <select
                        className="ml-2 cursor-pointer bg-white text-lg font-bold focus:outline-none dark:bg-darkGray-300"
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
                <div className="flex flex-col space-y-3 pt-5 md:flex-row md:items-center md:space-y-0 md:space-x-2">
                    <div className="flex h-16 w-full flex-col rounded-lg border-1 border-lightGray-300 bg-lightGray-400 px-3 dark:border-opacity-0 dark:bg-darkGray-600 dark:text-lightGray-100">
                        <label
                            htmlFor="location"
                            className="cursor-text pt-1 text-darkGray-100 dark:text-lightGray-600"
                        >
                            Location
                        </label>
                        <input
                            value={searchData.location}
                            type="text"
                            name="location"
                            id="location"
                            className="mt-0 w-full bg-lightGray-400 pt-1 text-lg font-bold text-darkGray-100 placeholder:font-thin placeholder:text-lightGray-300 focus:outline-none dark:border-opacity-0 dark:bg-darkGray-600 dark:text-lightGray-100"
                            placeholder="Where to go?"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div className="flex h-16 w-full flex-row justify-between space-x-2 overflow-scroll">
                        <div className="flex w-1/2 flex-col rounded-lg border-1 border-lightGray-300 bg-lightGray-400 text-lightGray-300 dark:border-opacity-0 dark:bg-darkGray-600 dark:text-lightGray-100">
                            <label
                                className="cursor-pointer px-3 pt-1 text-darkGray-100 dark:text-lightGray-600"
                                htmlFor="checkin"
                            >
                                Check In
                            </label>
                            <DatePicker
                                id="checkin"
                                name="checkin"
                                className="w-full cursor-pointer rounded-lg bg-lightGray-400 px-3 pt-1 text-lg font-bold text-black focus:outline-none dark:bg-darkGray-600 dark:text-lightGray-100"
                                locale="gb"
                                selectsStart
                                startDate={searchData.checkin}
                                endDate={searchData.checkout}
                                minDate={new Date()}
                                selected={searchData.checkin}
                                dateFormat="MMMM d, yyyy"
                                onChange={(date, e) => {
                                    handleCheckinChange(date, e);
                                }}
                            />
                        </div>
                        <div className="flex h-16 w-1/2 flex-col rounded-lg border-1 border-lightGray-300 bg-lightGray-400 text-lightGray-300 dark:border-opacity-0 dark:bg-darkGray-600 dark:text-lightGray-100">
                            <label
                                className="cursor-pointer px-3 pt-1 text-darkGray-100 dark:text-lightGray-600"
                                htmlFor="checkout"
                            >
                                Check Out
                            </label>
                            <DatePicker
                                id="checkout"
                                name="checkout"
                                className="w-full cursor-pointer rounded-lg bg-lightGray-400 px-3 pt-1 text-lg font-bold text-black focus:outline-none dark:bg-darkGray-600 dark:text-lightGray-100"
                                locale="gb"
                                selectsEnd
                                startDate={searchData.checkin}
                                endDate={searchData.checkout}
                                minDate={searchData.checkin}
                                selected={searchData.checkout}
                                dateFormat="MMMM d, yyyy"
                                onChange={(date, e) => {
                                    console.log(e?.target);
                                    handleCheckoutChange(date, e);
                                }}
                            />
                        </div>
                    </div>
                    <div className="h-full">
                        <button
                            className="h-16 w-full rounded-lg bg-blue-accent px-10 py-5 font-medium text-white hover:bg-blue-dark"
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
