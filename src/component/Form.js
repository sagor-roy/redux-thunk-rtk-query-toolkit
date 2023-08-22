import React, { useState } from 'react'
import Frame from '../asset/img/icons/Frame.svg'
import Vector1 from '../asset/img/icons/Vector (1).svg'
import Vector3 from '../asset/img/icons/Vector (3).svg'
import { useDispatch, useSelector } from 'react-redux'
import { createThunkAction } from '../redux/reducer/action';

function Form() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [classes, setClasses] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        if (data.length > 2) {
            alert('You are maximum 3 flight booking')
            return false;
        }
        dispatch(createThunkAction({ from, to, date, guests, classes }))
        setFrom("");
        setTo("");
        setDate("");
        setGuests("");
        setClasses("");
    }

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform" onSubmit={handleForm}>
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={Frame} alt="" />
                            <select value={from} onChange={(e) => setFrom(e.target.value)} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                <option value="" hidden>Please Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Saidpur">Saidpur</option>
                                <option value="Cox's Bazar">Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={Frame} alt="" />
                            <select value={to} onChange={(e) => setTo(e.target.value)} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                <option value="" hidden>Please Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Saidpur">Saidpur</option>
                                <option value="Cox's Bazar">Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    <div className="des-from">
                        <p>Journey Date</p>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                    </div>

                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={Vector1} alt="" />
                            <select value={guests} onChange={(e) => setGuests(e.target.value)} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src={Vector3} alt="" />
                            <select value={classes} onChange={(e) => setClasses(e.target.value)} className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                                <option value="" hidden>Please Select</option>
                                <option value="Business">Business</option>
                                <option value="Economy">Economy</option>
                            </select>
                        </div>
                    </div>

                    <button className="addCity" type="submit" id="lws-addCity">
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form