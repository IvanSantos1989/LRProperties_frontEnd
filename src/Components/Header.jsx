import { useState, useEffect, useRef, useContext } from 'react';
import { Button } from '@/Components/micro/Button';
import { Link, useNavigate } from 'react-router-dom';
import PT from '../assets/portugal.png';
import UK from '../assets/reino-unido.png';
import { AuthContext } from '@/contexts/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('EN');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);
    const { token } = useContext(AuthContext);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
        if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
            setProfileDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='w-full flex items-center justify-between px-10 p-5 shadow-sm bg-white'>
            <Link to="/"><p alt="logo" className='cursor-pointer text-xl font-bold'>LOGO</p></Link>
            <div className='flex items-center gap-2'>
                <div className="relative" ref={dropdownRef}>
                    <Button
                        className="rounded-xl text-white cursor-pointer flex items-center"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        {language}
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </Button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                            <ul>
                                <li
                                    className="flex gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleLanguageChange('EN')}
                                >
                                    English <img className='w-[18px]' src={UK} alt="UK Flag" />
                                </li>
                                <li
                                    className="flex gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleLanguageChange('PT')}
                                >
                                    Português <img className='w-[18px]' src={PT} alt="PT Flag" />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {                    
                    token === ""
                        ? 
                            <Link to="/login" ><Button className="rounded-xl text-white">Login</Button></Link> 
                        :
                            <div className="relative" ref={profileDropdownRef}>
                                <Button
                                    className="rounded-xl text-white cursor-pointer flex items-center"
                                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                                >
                                    Profile
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </Button>
                                {profileDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                                        <ul>
                                            <li
                                                className="flex gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() => {
                                                    setProfileDropdownOpen(false);
                                                    navigate("/profile/edit");
                                                }}
                                            >
                                                Manage Profile
                                            </li>
                                            <li
                                                className="flex gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() => {
                                                    setProfileDropdownOpen(false);
                                                    navigate("/logout");
                                                }}
                                            >
                                                Logout
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                }
            </div>
        </div>
    );
};

export default Header;