export const Switchers = ({ options, selectedOption, onOptionSelect }) => {
    return (
        <div>
            {options.map((option) => (
                <button key={option} onClick={() => onOptionSelect(option)} className={option === selectedOption ? "selected" : ""}>
                    {option}
                </button>
            ))}
        </div>
    );
};