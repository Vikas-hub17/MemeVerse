const AnimatedButton = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition-transform transform hover:scale-105 duration-300"
      >
        {text}
      </button>
    );
  };
  
  export default AnimatedButton;
  