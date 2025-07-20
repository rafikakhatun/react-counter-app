import { Minus, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)
    return (
        <>

            {/* Full screen background with gradient */}
            <div className="min-h-screen bg-gradient-to-br from-indigo-300 to-blue-400 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6 w-80">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">React Counter</h1>
                    {/*Displaying the counter value */}
                    <p className="text-4xl font-semibold text-indigo-600">{count}s</p>


                    <div className="flex justify-center gap-4">
                        {/* Increase count */}
                        <button onClick={() => setCount(count + 1)} className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl">
                            <Plus size={20} /> {/* + Icon */}
                        </button>
                        {/* Decrease count */}
                        <button onClick={() => setCount(count - 1)} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl">
                            <Minus size={20} /> {/* - Icon */}
                        </button>
                        {/* Reset count */}
                        <button onClick={() => setCount(0)} className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl">
                            <RotateCcw size={20} /> {/* Reset Icon */}
                        </button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Counter;