import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

const SettingsPage = () => {
    const navigate = useNavigate();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    //const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [reminderTime, setReminderTime] = useState(15);
    const { darkMode, setDarkMode } = useTheme();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <h2 className="text-xl font-medium mb-6">Settings</h2>

                <div className="w-full max-w-md space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="notifications" className="font-medium">Push Notifications</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="notifications"
                                    checked={notificationsEnabled}
                                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="darkMode" className="font-medium">Dark Mode</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="darkMode"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="reminderTime" className="block font-medium mb-2">
                                Reminder Time (minutes before departure)
                            </label>
                            <select
                                id="reminderTime"
                                value={reminderTime}
                                onChange={(e) => setReminderTime(Number(e.target.value))}
                                className="input-field dark:text-black"
                            >
                                <option value={5}>5 minutes</option>
                                <option value={10}>10 minutes</option>
                                <option value={15}>15 minutes</option>
                                <option value={30}>30 minutes</option>
                                <option value={60}>1 hour</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4">

                        <button
                            className="button-secondary w-full"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default SettingsPage;