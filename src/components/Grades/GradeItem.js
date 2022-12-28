import './GradeItem.css';
import GradeDate from './GradeDate'
function GradeItem(props) {


  return (
    <div className='grade-item'>
      <GradeDate date={props.date}/>
      <div className='grade-item__description'>
        <h2>{props.name}</h2>
        <div className='grade-item__score'>{props.score}</div>
      </div>
    </div>
  );
}

export default GradeItem;