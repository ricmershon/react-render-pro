'use client';

import { useState } from "react"

const Home = () => {
    const renderFunc = (amount: number) => (
        <div>
            <Euro amount={ amount } />
            <Pound amount={ amount } />
        </div>
    );

    return (
        <Amount render={renderFunc} />
    );
}

function Amount({ render }: { render: (amount: number) => React.ReactNode}) {
    const [amount, setAmount] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p6">
            <h1 className="text-3xl font-bold mb-4">Currency Converter</h1>
            <div className="flex items-center space-x-4 mb-4">
                <span>US Dollar: {amount} </span>
                <button
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                    type="button"
                    onClick={() => setAmount(amount + 1)}
                >
                    Increase
                </button>
                <button
                    className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                    type="button"
                    onClick={() => setAmount(amount - 1)}
                >
                    Descrease
                </button>
                <button
                    className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
                    onClick={() => setAmount(0)}
                >
                    Reset
                </button>
            </div>
            <div>
                {render(amount)}
            </div>
        </div>
    )
}

const Euro = ({ amount }: { amount: number }) => <p>Euro: { amount * 0.86 }</p>

const Pound = ({ amount }: { amount: number }) => <p>Pound: { amount * 0.76 }</p>

export default Home;