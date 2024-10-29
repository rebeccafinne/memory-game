export const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} type={type} className="margin-top">
      {children}
    </button>
  );
};
