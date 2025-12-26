import { useForm } from "../context/FormContext";


export default function Step3Expectations({ setStep }) {
    const { form, setForm } = useForm();
    const options = ["文化体験", "自然体験", "食べ歩き", "都市探索"];


    const toggle = (v) => {
        let updated;
        if (form.expectations.includes(v)) {
            updated = form.expectations.filter(e => e !== v);
        } else if (form.expectations.length < 2) {
            updated = [...form.expectations, v];
        } else {
            return;
        }
        setForm({ ...form, expectations: updated });
    };


    return (
        <div className="form-container">
            <h2>期待するもの（2つまで）</h2>
            <div className="button-group">
                {options.map(o => (
                    <button key={o} onClick={() => toggle(o)}
                        className={form.expectations.includes(o) ? "active" : ""}>
                        {o}
                    </button>
                ))}
            </div>
            <div className="nav-buttons">
                <button onClick={() => setStep(2)} className="back-btn">戻る</button>
                {form.expectations.length > 0 && (
                    <button onClick={() => setStep(4)} className="submit-btn">次へ</button>
                )}
            </div>
        </div>
    );
}