import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GuestSelector from "./GuestSelector";

const SearchBar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const [adults, setAdults] = useState(1);
  const [pets, setPets] = useState(0);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const [errorMessage, setErrorMessage] = useState("");
=======
=======
>>>>>>> Stashed changes
  const [filterByGuests, setFilterByGuests] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);

>>>>>>> Stashed changes
  const guestSelectorRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      guestSelectorRef.current &&
      !guestSelectorRef.current.contains(event.target)
    ) {
      setShowGuestSelector(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const nights = checkInDate && checkOutDate ? (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24) : 0;
    if (nights < 2) {
      setErrorMessage("Minimum stay is 2 nights");
    } else if (pets > 2) {
      setErrorMessage("2 pets allowed only");
    } else {
      setErrorMessage("");
      // Execute search logic here
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-full shadow-lg">
      <div className="flex items-center gap-3 border-r pr-3">
        <div className="flex flex-col">
          <label className="text-xs outline-none">PORTO</label>
          {/* <input
                        type="text"
                        placeholder="Adicionar localização"
                        className="outline-none"
                    /> */}
        </div>
      </div>
      <div className="flex items-center gap-3 border-r pr-3">
        <div className="flex flex-col ml-4">
          <label className="text-xs text-gray-500">Check-in</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Add date"
            className="outline-none"
            dateFormat={"dd/MM/yyyy"}
          />
        </div>
      </div>
      <div className="flex items-center gap-3 border-r pr-3">
        <div className="flex flex-col ml-4">
          <label className="text-xs text-gray-500">Check-out</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Add date"
            className="outline-none"
            dateFormat={"dd/MM/yyyy"}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col relative ml-4">
          <label className="text-xs text-gray-500">Who</label>
          <input
            type="text"
            value={`${adults} Guest, ${pets} Animal`}
            onFocus={() => setShowGuestSelector(true)}
            onChange={(e) => {}}
            className="outline-none"
          />
          {showGuestSelector && (
            <div ref={guestSelectorRef}>
              <GuestSelector
                adults={adults}
                pets={pets}
                setAdults={setAdults}
                setPets={setPets}
              />
            </div>
          )}
        </div>
      </div>
      <button
        className="bg-[#FF9874] p-3 rounded-full text-white hover:bg-[#E57A5a]"
        onClick={handleSearch}
      >
        <FiSearch />
      </button>
      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
=======
=======
>>>>>>> Stashed changes
    if (!checkInDate || !checkOutDate) {
      setErrorMessage("Please select both check-in and check-out dates.");
      setErrorModalVisible(true);
      return;
    }

    const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

    if (nights < 2) {
      setErrorMessage("The minimum stay is 2 nights. Please check your fields and try again!");
      setErrorModalVisible(true);
      return;
    }

    if (pets > 2) {
      setErrorMessage("2 pets allowed only. Please check your fields and try again!");
      setErrorModalVisible(true);
      return;
    }

    // Confirmação que atende os requisitos de pesquisa
    console.log("Search initiated with:", {
      checkInDate,
      checkOutDate,
      adults,
      pets,
      filterByGuests,
    });
  };

  return (
    <div>
      <ErrorModal
        errorMessage={errorMessage}
        visible={errorModalVisible}
        setVisible={setErrorModalVisible}
      />
      <div className="flex items-center justify-between bg-white p-4 rounded-full shadow-lg">
        <div className="flex items-center gap-3 border-r pr-3">
          <div className="flex flex-col">
            <label className="text-xs outline-none">PORTO</label>
          </div>
        </div>
        <div className="flex items-center gap-3 border-r pr-3">
          <div className="flex flex-col ml-4">
            <label className="text-xs text-gray-500">Check-in</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Add date"
              className="outline-none"
              dateFormat={"dd/MM/yyyy"}
              minDate={new Date()} // Desabilita datas passadas
            />
          </div>
        </div>
        <div className="flex items-center gap-3 border-r pr-3">
          <div className="flex flex-col ml-4">
            <label className="text-xs text-gray-500">Check-out</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Add date"
              className="outline-none"
              dateFormat={"dd/MM/yyyy"}
              minDate={checkInDate || new Date()} // Desabilita datas antes do check-in
              disabled={!checkInDate} // Desabilita o campo até que o check-in seja selecionado
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col relative ml-4">
            <label className="text-xs text-gray-500">Who</label>
            <input
              type="text"
              value={`${adults} Guest, ${pets} Animal`}
              onFocus={() => setShowGuestSelector(true)}
              onChange={(e) => {}}
              className="outline-none"
            />
            {showGuestSelector && (
              <div ref={guestSelectorRef}>
                <GuestSelector
                  adults={adults}
                  pets={pets}
                  setAdults={setAdults}
                  setPets={setPets}
                />
              </div>
            )}
          </div>
          <div className="flex items-center ml-4">
            <input
              type="checkbox"
              id="filterGuests"
              checked={filterByGuests}
              onChange={(e) => setFilterByGuests(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="filterGuests" className="text-sm text-gray-500 pr-5">
              Filter by number of guests
            </label>
          </div>
        </div>
        <button
          className="bg-[#FF9874] p-3 rounded-full text-white hover:bg-[#E57A5a]"
          onClick={handleSearch}
        >
          <FiSearch />
        </button>
      </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </div>
  );
};

export default SearchBar;