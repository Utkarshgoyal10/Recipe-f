import React, { useState, useEffect } from "react";
import Map from "./Map";
import SearchBox from "./Search";
import { submitForm, reverseGeocode } from "../../utils/api";
import './RegisterNGO.css';

export default function NGOForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [phone, setPhone] = useState("");       // ✅ Added phone
  const [email, setEmail] = useState("");

  // Address fields
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [addressDisplay, setAddressDisplay] = useState("");

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("gps");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setHouse(""); setStreet(""); setTown(""); setDistrict("");
    setState(""); setPincode(""); setAddressDisplay(""); setLat(null); setLon(null);
  }, [mode]);

  const handleSelect = (place) => {
    setAddressDisplay(place.display_name || "");
    setLat(parseFloat(place.lat)); setLon(parseFloat(place.lon));
    const a = place.address || {};
    setTown(a.town || a.city || a.village || "");
    setDistrict(a.county || a.state_district || "");
    setState(a.state || ""); setPincode(a.postcode || "");
    setStreet(a.road || ""); setHouse(a.house_number || "");
  };

  const handleMapClick = async ({ lat, lon }) => {
    setLat(lat); setLon(lon);
    try {
      const res = await reverseGeocode(lat, lon);
      if (res && res.address) {
        const a = res.address;
        setTown(a.town || a.city || a.village || "");
        setDistrict(a.county || a.state_district || "");
        setState(a.state || ""); setPincode(a.postcode || "");
        setStreet(a.road || ""); setHouse(a.house_number || "");
        setAddressDisplay(res.display_name || "");
      } else setAddressDisplay(`${lat}, ${lon}`);
    } catch {
      setAddressDisplay(`${lat}, ${lon}`);
    }
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) return alert("Your browser does not support location");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        await handleMapClick({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        setSuccessMsg("✅ Current location fetched successfully!");
        setTimeout(() => setSuccessMsg(""), 3000);
      },
      () => alert("Unable to access your GPS location"),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!lat || !lon) return alert("Select an address or use GPS first.");
    if (!town) return alert("Nearest town is required.");
    if (!phone) return alert("Phone number is required.");  // ✅ validation

    setLoading(true);
    try {
      const payload = {
        name,
        contactPerson: contact,
        email,
        phone,                     // ✅ include phone
        house,
        street,
        town,
        district,
        state,
        pincode,
        fullAddress: addressDisplay,
        latitude: Number(lat),     // match backend field names
        longitude: Number(lon)
      };
      const res = await submitForm(payload, "ngo");
      alert(res.message || "Submitted");

      // reset form
      setName(""); setContact(""); setPhone(""); setEmail("");
      setHouse(""); setStreet(""); setTown(""); setDistrict(""); setState(""); setPincode("");
      setAddressDisplay(""); setLat(null); setLon(null); setMode("gps");
    } catch (err) {
      console.error(err);
      alert("Error submitting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ngo-container">
      <h2>Register NGO</h2>
      {successMsg && <div className="success-popup">{successMsg}</div>}

      <div className="mode-toggle-buttons">
        <button className={mode==="gps"?"active":"inactive"} onClick={()=>setMode("gps")}>📍 Use Current Location</button>
        <button className={mode==="manual"?"active":"inactive"} onClick={()=>setMode("manual")}>✏️ Enter Manually</button>
      </div>

      <div className="ngo-flex">
        <div className="ngo-form">
          {mode==="gps" && (
            <button type="button" onClick={handleUseMyLocation}>🔄 Use Current Location Again</button>
          )}

          <form onSubmit={handleSubmit}>
            <label>NGO Name</label><input className="input" value={name} onChange={e=>setName(e.target.value)}/>
            <label>Contact Person</label><input className="input" value={contact} onChange={e=>setContact(e.target.value)}/>
            <label>Email</label><input className="input" value={email} onChange={e=>setEmail(e.target.value)}/>
            <label>Phone</label><input className="input" value={phone} onChange={e=>setPhone(e.target.value)}/>

            {mode==="manual" && <>
              <label>Search Address</label>
              <SearchBox address={addressDisplay} setAddress={setAddressDisplay} setLat={setLat} setLon={setLon} onSelect={handleSelect}/>
            </>}

            <label>House / Building</label><input className="input" value={house} onChange={e=>setHouse(e.target.value)}/>
            <label>Street / Locality</label><input className="input" value={street} onChange={e=>setStreet(e.target.value)}/>
            <label>Town / City</label><input className="input" value={town} onChange={e=>setTown(e.target.value)}/>
            <label>District</label><input className="input" value={district} onChange={e=>setDistrict(e.target.value)}/>
            <label>State</label><input className="input" value={state} onChange={e=>setState(e.target.value)}/>
            <label>Pincode</label><input className="input" value={pincode} onChange={e=>setPincode(e.target.value)}/>
            <label>Full Address</label><input className="input" value={addressDisplay} readOnly/>
            <label>Latitude</label><input className="input" value={lat ?? ""} readOnly/>
            <label>Longitude</label><input className="input" value={lon ?? ""} readOnly/>

            <button type="submit" disabled={loading}>{loading?"Submitting...":"Submit"}</button>
          </form>
        </div>

        <div className="ngo-map">
          <Map lat={lat} lon={lon} onMapClick={handleMapClick}/>
        </div>
      </div>
    </div>
  );
}
