import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div class="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <form>

                <div class="mb-4">
                    <label for="origin" class="block text-gray-600 font-medium mb-2">Origin</label>
                    <select
                        id="origin"
                        class="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        <optgroup label="Dhaka">
                            <option>Dhaka</option>
                            <option>Gazipur</option>
                            <option>Kishoreganj</option>
                            <option>Madaripur</option>
                            <option>Manikganj</option>
                            <option>Munshiganj</option>
                            <option>Narayanganj</option>
                            <option>Narsingdi</option>
                            <option>Rajbari</option>
                            <option>Shariatpur</option>
                            <option>Tangail</option>
                        </optgroup>
                        <optgroup label="Chattogram">
                            <option>Chattogram</option>
                            <option>Brahmanbaria</option>
                            <option>Chandpur</option>
                            <option>Cox's Bazar</option>
                            <option>Feni</option>
                            <option>Khagrachari</option>
                            <option>Bandarban</option>
                            <option>Lakshmipur</option>
                            <option>Noakhali</option>
                            <option>Rangamati</option>
                        </optgroup>
                        <optgroup label="Rajshahi">
                            <option>Rajshahi</option>
                            <option>Bogura</option>
                            <option>Joypurhat</option>
                            <option>Naogaon</option>
                            <option>Natore</option>
                            <option>Chapainawabganj</option>
                            <option>Pabna</option>
                            <option>Sirajganj</option>
                        </optgroup>
                        <optgroup label="Khulna">
                            <option>Khulna</option>
                            <option>Bagerhat</option>
                            <option>Chuadanga</option>
                            <option>Jashore</option>
                            <option>Jhenaidah</option>
                            <option>Kushtia</option>
                            <option>Magura</option>
                            <option>Meherpur</option>
                            <option>Satkhira</option>
                        </optgroup>
                        <optgroup label="Barishal">
                            <option>Barishal</option>
                            <option>Barguna</option>
                            <option>Bhola</option>
                            <option>Jhalokati</option>
                            <option>Patuakhali</option>
                            <option>Pirojpur</option>
                        </optgroup>
                        <optgroup label="Sylhet">
                            <option>Sylhet</option>
                            <option>Habiganj</option>
                            <option>Moulvibazar</option>
                            <option>Sunamganj</option>
                        </optgroup>
                        <optgroup label="Rangpur">
                            <option>Rangpur</option>
                            <option>Dinajpur</option>
                            <option>Gaibandha</option>
                            <option>Kurigram</option>
                            <option>Lalmonirhat</option>
                            <option>Nilphamari</option>
                            <option>Panchagarh</option>
                            <option>Thakurgaon</option>
                        </optgroup>
                        <optgroup label="Mymensingh">
                            <option>Mymensingh</option>
                            <option>Jamalpur</option>
                            <option>Netrokona</option>
                            <option>Sherpur</option>
                        </optgroup>
                    </select>
                </div>

                <div class="mb-4">
                    <label for="destination" class="block text-gray-600 font-medium mb-2">Destination</label>
                    <select
                        id="destination"
                        class="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        <optgroup label="Dhaka">
                            <option>Dhaka</option>
                            <option>Gazipur</option>
                            <option>Kishoreganj</option>
                            <option>Madaripur</option>
                            <option>Manikganj</option>
                            <option>Munshiganj</option>
                            <option>Narayanganj</option>
                            <option>Narsingdi</option>
                            <option>Rajbari</option>
                            <option>Shariatpur</option>
                            <option>Tangail</option>
                        </optgroup>
                        <optgroup label="Chattogram">
                            <option>Chattogram</option>
                            <option>Brahmanbaria</option>
                            <option>Chandpur</option>
                            <option>Cox's Bazar</option>
                            <option>Feni</option>
                            <option>Khagrachari</option>
                            <option>Bandarban</option>
                            <option>Lakshmipur</option>
                            <option>Noakhali</option>
                            <option>Rangamati</option>
                        </optgroup>
                        <optgroup label="Rajshahi">
                            <option>Rajshahi</option>
                            <option>Bogura</option>
                            <option>Joypurhat</option>
                            <option>Naogaon</option>
                            <option>Natore</option>
                            <option>Chapainawabganj</option>
                            <option>Pabna</option>
                            <option>Sirajganj</option>
                        </optgroup>
                        <optgroup label="Khulna">
                            <option>Khulna</option>
                            <option>Bagerhat</option>
                            <option>Chuadanga</option>
                            <option>Jashore</option>
                            <option>Jhenaidah</option>
                            <option>Kushtia</option>
                            <option>Magura</option>
                            <option>Meherpur</option>
                            <option>Satkhira</option>
                        </optgroup>
                        <optgroup label="Barishal">
                            <option>Barishal</option>
                            <option>Barguna</option>
                            <option>Bhola</option>
                            <option>Jhalokati</option>
                            <option>Patuakhali</option>
                            <option>Pirojpur</option>
                        </optgroup>
                        <optgroup label="Sylhet">
                            <option>Sylhet</option>
                            <option>Habiganj</option>
                            <option>Moulvibazar</option>
                            <option>Sunamganj</option>
                        </optgroup>
                        <optgroup label="Rangpur">
                            <option>Rangpur</option>
                            <option>Dinajpur</option>
                            <option>Gaibandha</option>
                            <option>Kurigram</option>
                            <option>Lalmonirhat</option>
                            <option>Nilphamari</option>
                            <option>Panchagarh</option>
                            <option>Thakurgaon</option>
                        </optgroup>
                        <optgroup label="Mymensingh">
                            <option>Mymensingh</option>
                            <option>Jamalpur</option>
                            <option>Netrokona</option>
                            <option>Sherpur</option>
                        </optgroup>
                    </select>
                </div>


                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label for="from-date" class="block text-gray-600 font-medium mb-2">From</label>
                        <input
                            type="date"
                            id="from-date"
                            class="w-full border text-base border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div>
                        <label for="to-date" class="block text-gray-600 font-medium mb-2">To</label>
                        <input
                            type="date"
                            id="to-date"
                            class="w-full border text-base border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                </div>


                <Link to="/"
                    type="submit"
                    class="w-full px-10 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 rounded-lg transition duration-300"
                >
                    Start Booking
                </Link>
            </form>
        </div>

    );
};

export default Booking;