import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ lat, lon, onMapClick }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", { center: [28.6139, 77.2090], zoom: 12 });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(mapRef.current);

      mapRef.current.on("click", function (e) {
        const { lat, lng } = e.latlng;
        if (onMapClick) onMapClick({ lat, lon: lng });
      });
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      if (lat != null && lon != null) {
        if (!markerRef.current) {
          markerRef.current = L.marker([lat, lon]).addTo(mapRef.current);
        } else {
          markerRef.current.setLatLng([lat, lon]);
        }
        markerRef.current.bindPopup("Selected location").openPopup();
        mapRef.current.flyTo([lat, lon], 16);
      } else {
        if (markerRef.current) {
          mapRef.current.removeLayer(markerRef.current);
          markerRef.current = null;
        }
      }
    }
  }, [lat, lon]);

  return <div id="map" style={{ height: "100%", minHeight: "400px" }} />;
}
