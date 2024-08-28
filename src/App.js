import { useState } from 'react';
import Button from './Button.js';
import Dice from './Dice.js'

function random(n) {
    return Math.ceil(Math.random() * 6)
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [records, setRecords] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum); //화면이 리렌더링
        setSum(sum + nextNum);
        // 불변형 데이터로부터 변형 데이터를 만들기
        const newRecords = [...records, nextNum] //배열 클론
        setRecords(newRecords)
    }

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setRecords([]);
    }

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <h2>나</h2>
            <Dice num={num} />
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            {records.join(',')}
        </div>
    );
}

export default App;