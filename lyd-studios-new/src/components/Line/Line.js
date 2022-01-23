import './Line.css';

export default function Line({ vertical }) {

    return (
        <div className={`${vertical ? 'line_vertical' : ''} line`}></div>
    )
}