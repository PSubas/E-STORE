const Loading = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 m-2 sm:m-4 md:m-6">
                {[1, 2, 3].map((index) => (
                    <div
                        className="animate-pulse shadow-md bg-gray-200 rounded-lg overflow-hidden"
                        key={index}>
                        <div
                            className="relative"
                            style={{ width: "100%", height: "18rem" }}></div>
                        <div className="p-2 flex flex-col">
                            <div>
                                <div className="h-6 bg-gray-300 rounded mb-1"></div>
                                <div className="h-4 bg-gray-300 rounded"></div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="h-6 w-16 bg-gray-300 rounded"></div>
                                <div className="h-10 w-24 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Loading;
