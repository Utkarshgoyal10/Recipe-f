export async function submitForm(payload, type="ngo") {
  let endpoint = "";

  if (type === "ngo") endpoint = "https://recipe-b.onrender.com/api/ngo/register";
  else if (type === "donor") endpoint = "https://recipe-b.onrender.com/api/donor/register";
  else throw new Error("Invalid type");

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("Backend response:", data);

    if (!res.ok) return { success: false, message: data.message || "Submission failed" };
    return { success: true, ...data };
  } catch (err) {
    console.error("Error submitting form:", err);
    return { success: false, message: err.message };
  }
}



export async function reverseGeocode(lat, lon) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    if (!res.ok) throw new Error("Reverse geocode failed");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Reverse geocode error:", err);
    return null;
  }
}

