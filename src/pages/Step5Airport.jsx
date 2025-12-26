import { useForm } from "../context/FormContext";


export default function Step5Airport({ setStep }) {
    const { form, setForm } = useForm();
    const options = ["東京", "大阪", "福岡", "その他"];


    return (
        <div className="form-container">
            <h2>空港</h2>
            <select onChange={(e) => {
                setForm({ ...form, airport: e.target.value });
                if (e.target.value) {
                    setStep(6);
                }
            }} value={form.airport || ''}>
                <option value="">選択してください</option>
                {options.map(o => <option key={o}>{o}</option>)}
            </select>
            <div className="nav-buttons">
                <button onClick={() => setStep(4)} className="back-btn">戻る</button>
            </div>
        </div>
    );
}