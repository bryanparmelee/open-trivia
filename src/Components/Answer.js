const Answer = ({ option, selectHandler, questionItem }) => {
    const { selected, id, checked, correct } = questionItem;
    const selectedBorder = '3px solid purple';

    let styles = {border: selected === option ? selectedBorder : ''}

    const styleCheck = (selection) => {
        if (option === selection) {
            return correct ? styles = 
            {backgroundColor: 'green'} : 
            styles = {backgroundColor: 'red'}
        }       
       }

   if (checked && selected.length) {
        styleCheck(selected);
   }
 
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