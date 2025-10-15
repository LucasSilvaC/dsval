const GradientButton = ({ children, className = "", gradientFrom, gradientTo, ...props }) => {
    const gradientClasses = `bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:opacity-90 transition-all duration-300 text-white font-semibold border-0`;
    
    return (
        <button
            className={`h-full w-[12rem] ${gradientClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default GradientButton;