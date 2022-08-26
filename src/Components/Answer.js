const Answer = ({ option, selectHandler, selected, id }) => {

    const selectedBorder = '1px solid black';

    const styles = {border: selected === option ? selectedBorder : ''}

    return (
        <button 
            className="quiz-btn"
            style={styles}
            id={id}
            type="button" 
            value={option}
            onClick={() => selectHandler(id, option) }
        >
       {option}
        </button>
    )
};

export default Answer;