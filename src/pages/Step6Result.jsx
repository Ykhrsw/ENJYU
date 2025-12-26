import { useForm } from "../context/FormContext";


export default function Step6Result({ setStep }) {
    const { form } = useForm();


    const calcBudget = () => {
        const base = { "1w": 2000, "2w": 3500, "3w": 5000, "4w+": 6500 };
        const people = form.adults + form.children * 0.7;
        return Math.round((base[form.duration] || 2000) * people * (1 + form.locations.length * 0.1));
    };


    return (
        <div className="form-container">
            <h2>結果</h2>
            <div className="result-box">
                <p className="budget">${calcBudget()} USD</p>
                <p className="note">※概算です</p>
            </div>
            <div className="nav-buttons">
                <button onClick={() => setStep(5)} className="back-btn">戻る</button>
                <button onClick={() => setStep(1)} className="submit-btn">最初に戻る</button>
            </div>
        </div>
    );
}