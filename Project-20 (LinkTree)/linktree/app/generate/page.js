"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function GeneratePage() {
  const [username, setUsername] = useState("");
  const [links, setLinks] = useState([""]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddLink = () => {
    setLinks([...links, ""]);
  };

  const handleRemoveLink = (index) => {
    if (links.length === 1) return;
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const handleChangeLink = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      toast.error("Please upload a valid image file");
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert image to Base64 if exists
      const imageBase64 = image ? await convertToBase64(image) : null;

      const response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.toLowerCase(), // Add toLowerCase()
          links: links.filter((link) => link.trim() !== ""),
          image: imageBase64,
        }),
      });

      // Handle HTTP errors
      if (!response.ok) {
        const errorText = await response.text();
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.message);
        } catch {
          throw new Error(errorText || "Request failed");
        }
      }

      // Parse successful response
      const data = await response.json();

      toast.success("Profile saved successfully! 🎉");
      setUsername("");
      setLinks([""]);
      setImage(null);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error.message || "Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2e] to-[#3a3a5e] px-4 pt-[130px]">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-6 flex flex-col gap-4 border border-white/20"
      >
        <h2 className="text-center text-2xl font-bold text-white mb-2">
          Create Your Link Profile 🌟
        </h2>
        <ToastContainer position="top-center" autoClose={3000} />

        {/* Username Field */}
        <label className="flex flex-col gap-1">
          <span className="text-white font-medium">Username:</span>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border border-white/30 bg-white/20 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#e57cff] placeholder-white/50"
          />
        </label>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col gap-1 relative">
              <span className="text-white font-medium">Link {index + 1}:</span>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={link}
                  onChange={(e) => handleChangeLink(index, e.target.value)}
                  required
                  className="flex-1 border border-white/30 bg-white/20 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#e57cff] placeholder-white/50"
                />
                {links.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveLink(index)}
                    className="px-3 bg-red-500/20 text-red-300 rounded-md hover:bg-red-500/30 transition-colors"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Link Button */}
        <button
          type="button"
          onClick={handleAddLink}
          className="w-full bg-white/20 text-white py-2 rounded-md hover:bg-white/30 transition-all"
        >
          + Add Another Link
        </button>

        {/* Image Upload */}
        <label className="flex flex-col gap-1 mt-4">
          <span className="text-white font-medium">
            Profile Image (optional):
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-white/30 bg-white/20 text-white rounded-md p-2 cursor-pointer file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e57cff]"
          />
          {image && (
            <p className="text-white text-sm mt-1">
              Selected: {image.name} ({Math.round(image.size / 1024)}KB)
            </p>
          )}
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#e57cff] text-white py-2 rounded-md hover:bg-[#d147ff] disabled:bg-[#a154b3] disabled:cursor-not-allowed transition-all mt-6"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">🌀</span>
              Saving...
            </span>
          ) : (
            "Save Profile"
          )}
        </button>
      </form>
    </div>
  );
}
