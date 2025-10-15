export const OnHover = ({ children, className }) => {
  return (
    <div
      className={`inline-block transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};