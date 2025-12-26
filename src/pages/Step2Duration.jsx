import { useForm } from "../context/FormContext";
import NavigationButtons from "../components/NavigationButtons";


export default function Step2Duration({ setStep }) {
    const { form, setForm } = useForm();
    const options = ["1w", "2w", "3w", "4w+"];


    return (
        <div className="form-container">
            <h2>旅行期間</h2>
            <div className="button-group">
                {options.map(o => (
                    <button key={o} onClick={() => {
                        setForm({ ...form, duration: o });
                        setStep(3);
                    }}
                        className={form.duration === o ? "active" : ""}>
                        {o}
                    </button>
                ))}
            </div>
            <div className="nav-buttons">
                <button onClick={() => setStep(1)} className="back-btn">戻る</button>
            </div>
        </div>
    );
}