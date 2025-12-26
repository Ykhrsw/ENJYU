import { useForm } from "../context/FormContext";


export default function Step4Locations({ setStep }) {
    const { form, setForm } = useForm();
    const options = ["大阪", "京都", "広島", "福岡", "北海道", "東京", "富士山"];


    const toggle = (v) => {
        setForm({
            ...form,
            locations: form.locations.includes(v)
                ? form.locations.filter(l => l !== v)
                : [...form.locations, v]
        });
    };


    return (
        <div className="form-container">
            <h2>行きたい場所</h2>
            <div className="button-group multi-col">
                {options.map(o => (
                    <button key={o} onClick={() => toggle(o)}
                        className={form.locations.includes(o) ? "active" : ""}>
                        {o}
                    </button>
                ))}
            </div>
            <div className="nav-buttons">
                <button onClick={() => setStep(3)} className="back-btn">戻る</button>
                {form.locations.length > 0 && (
                    <button onClick={() => setStep(5)} className="submit-btn">次へ</button>
                )}
            </div>
        </div>
    );
}