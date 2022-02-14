export default function Todo({ name }) {
    return (
        <div className="flex justify-between bg-gradient-to-r from-sky-600 to-cyan-600 w-full py-4 px-8 rounded-3xl font-semibold text-lg hover:scale-105 transition-all duration-200">
            <div className="flex items-center">
                <h1>{name}</h1>
                {/* Add More Properties here */}
            </div>
            <button className="hover:bg-white hover:text-red-600 active:bg-red-800 active:scale-95 rounded-full p-[2px] transition-all duration-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>
        </div>
    )
}
