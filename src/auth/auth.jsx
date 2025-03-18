import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Auth = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
                <div className="space-y-4">
                    <input

                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <input
                   
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                    
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Sign In
                    </button>

                    <button
                    
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
                    >
                        Check If Signed In
                    </button>

                    <button
                    
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                        Continue with Google
                    </button>
                    <button
                    
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        Sign Out
                    </button>

                </div>
            </div>
            {/* Add ToastContainer */}
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};
