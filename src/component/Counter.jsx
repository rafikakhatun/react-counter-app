import { Minus, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)
    return (
        <>


            <div className="min-h-screen bg-gradient-to-br from-indigo-300 to-blue-400 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6 w-80">
                    <h1 className="text-2xl font-bold text-gray-700">React Counter</h1>
                    <p className="text-5xl font-bold text-indigo-600"></p>


                    <div className="flex justify-center gap-4">
                        <button
                            
                            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl"
                        >
                            <Plus size={20} /> {/* + Icon */}
                        </button>
                        <button
                            
                            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl"
                        >
                             <Minus size={20} /> {/* - Icon */}
                        </button>
                        <button
                            
                            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl"
                        >
                             <RotateCcw size={20} /> {/* Reset Icon */}
                        </button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Counter;