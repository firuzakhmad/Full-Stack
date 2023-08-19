import { useJsApiLoader } from "@react-google-maps/api";
import React, { createContext, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export const AllAppContext = createContext();

export const AllAppContextProvider = ({ children }) => {
  // *************************** FORM SECTION START *****************************
  const { t } = useTranslation();

  const pageTitle = {
    0: t("personal_information"),
    1: t("goods_information"),
    2: t("path"),
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    weight: "",
    date: "",
    origin: "",
    destination: "",
  });

  const canSubmit = page === Object.keys(pageTitle).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("post") && key !== "image")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("image") && key !== "start")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage3 = Object.keys(data)
    .filter((key) => key.startsWith("destination") && key !== "price")
    .map((key) => data[key])
    .every(Boolean);

  const disablePrev = page === 0;
  const disableNext =
    page === Object.keys(pageTitle).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2) ||
    (page === 2 && !canNextPage3);

  const prevHide = page === 0 && "remove-button";
  const nextHide =
    page === Object.keys(pageTitle).length - 1 && "remove-button";
  const submitHide =
    page !== Object.keys(pageTitle).length - 1 && "remove-button";

  // *************************** FORM SECTION END *****************************

  // ***************************  FUNCTION START *****************************
  function capitalizeFirstLetter(word) {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  }
  // ***************************  FUNCTION END *****************************

  // ***************************  GOOGLE MAP START *****************************
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    libraries,
  });

  // ***************************  GOOGLE MAP END *****************************

  // ***************************  FORM INPUTS START *****************************
  const [personalInputs, setPersonalInputs] = useState([
    {
      id: 1,
      name: "name",
      type: "input",
      value: "",
      isFocused: false,
      label: t("name"),
    },
    {
      id: 2,
      name: "email",
      type: "input",
      value: "",
      isFocused: false,
      label: t("mail"),
    },
    {
      id: 3,
      name: "phone",
      type: "input",
      value: "",
      isFocused: false,
      label: t("phone"),
    },
  ]);

  const [goodsInputs, setGoodsInputs] = useState([
    {
      id: 1,
      name: "type",
      type: "text",
      value: "",
      isFocused: false,
      label: t("type"),
      ref: originRef,
    },
    {
      id: 2,
      name: "weight",
      type: "text",
      value: "",
      isFocused: false,
      label: t("max_weight"),
    },
    {
      id: 3,
      name: "date",
      type: "date",
      value: "",
      isFocused: false,
      label: t("city"),
    },
  ]);

  const [locationInputs, setLocationInputs] = useState([
    {
      id: 1,
      name: "origin",
      type: "input",
      value: "",
      isFocused: false,
      label: t("origin"),
      placeHolder: t("origin_location"),
      ref: originRef,
    },
    {
      id: 2,
      name: "destination",
      type: "input",
      value: "",
      isFocused: false,
      label: t("destination"),
      placeHolder: t("destination_location"),
      ref: destiantionRef,
    },
    {
      id: 3,
      name: "display",
      type: "button",
    },
  ]);

  const handleInputChange = (event, inputData, setInputData, id) => {
    const updatedFields = inputData.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setInputData(updatedFields);

    const type = event.target.type;
    const name = event.target.name;

    const value =
      type === "checkbox" ? event.target.checked : event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputFocus = (id, inputData, setInputData, state) => {
    const updatedFields = inputData.map((field) =>
      field.id === id ? { ...field, isFocused: state } : field
    );
    setInputData(updatedFields);
  };

  const clearObjectStateValues = (object, setObject) => {
    const updatedInputFields = object.map((field) => ({
      ...field,
      value: "",
    }));

    // Set the state with the updated inputFields array
    setObject(updatedInputFields);
  };
  // ***************************  FORM INPUTS END *****************************

  return (
    <AllAppContext.Provider
      value={{
        // Form
        pageTitle,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
        // functions
        capitalizeFirstLetter,

        // Form Inputs
        personalInputs,
        setPersonalInputs,
        goodsInputs,
        setGoodsInputs,
        locationInputs,
        setLocationInputs,
        handleInputChange,
        handleInputFocus,
        clearObjectStateValues,

        // GoogleMap
        distance,
        duration,
        map,
        setMap,
        directionsResponse,
        setDirectionsResponse,
        originRef,
        destiantionRef,
        calculateRoute,
        clearRoute,
        isLoaded,
      }}
    >
      {children}
    </AllAppContext.Provider>
  );
};
