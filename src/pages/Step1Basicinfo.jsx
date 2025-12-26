import { useForm } from "../context/FormContext";


export default function Step1BasicInfo({ setStep }) {
    const { form, setForm } = useForm();

    const handleNext = () => {
        if (form.name) {
            setStep(2);
        }
    };

    return (
        <div className="form-container">
            <h2>基本情報</h2>
            <input placeholder="名前" onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name || ''} />

            <div className="select-group">
                <div className="select-wrapper">
                    <label>大人</label>
                    <select onChange={(e) => setForm({ ...form, adults: Number(e.target.value) })} value={form.adults || 1}>
                        {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                    </select>
                </div>
                <div className="select-wrapper">
                    <label>子供</label>
                    <select onChange={(e) => setForm({ ...form, children: Number(e.target.value) })} value={form.children || 0}>
                        {[0, 1, 2, 3, 4].map(n => <option key={n}>{n}</option>)}
                    </select>
                </div>
            </div>

            <input placeholder="メールアドレス" type="email" />
            <input placeholder="電話番号" type="tel" />
            <input placeholder="知り得たきっかけ" />

            <button onClick={handleNext} className="submit-btn">次へ</button>
        </div>
    );
}