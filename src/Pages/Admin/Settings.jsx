import { useState } from "react";
import axios from "axios";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [siteName, setSiteName] = useState("");
  const [siteDescription, setSiteDescription] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      await axios.post('http://127.0.0.1:8000/api/admin/change-password', {
        current_password: currentPassword,
        new_password: newPassword,
      });
      setMessage("Password changed successfully.");
    } catch (error) {
      console.error("Error changing password:", error);
      setMessage("Failed to change password.");
    }
  };

  const handleSiteInfoChange = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/admin/site-info', {
        name: siteName,
        description: siteDescription,
      });
      setMessage("Site information updated successfully.");
    } catch (error) {
      console.error("Error updating site information:", error);
      setMessage("Failed to update site information.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Settings</h2>
      {message && <p className="text-red-500">{message}</p>}
      <div className="mb-8">
        <h3 className="text-xl mb-2">Change Password</h3>
        <form onSubmit={handlePasswordChange}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Change Password
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl mb-2">Site Information</h3>
        <form onSubmit={handleSiteInfoChange}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Site Name</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Site Description</label>
            <textarea
              value={siteDescription}
              onChange={(e) => setSiteDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Update Site Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;