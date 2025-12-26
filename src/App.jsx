import { useState } from "react";
import { FormProvider } from "./context/FormContext";
import Step1BasicInfo from "./pages/Step1BasicInfo";
import Step2Duration from "./pages/Step2Duration";
import Step3Expectations from "./pages/Step3Expectations";
import Step4Locations from "./pages/Step4Locations";
import Step5Airport from "./pages/Step5Airport";
import Step6Result from "./pages/Step6Result";


export default function App() {
    const [step, setStep] = useState(1);


    const renderStep = () => {
        switch (step) {
            case 1: return <Step1BasicInfo setStep={setStep} />;
            case 2: return <Step2Duration setStep={setStep} />;
            case 3: return <Step3Expectations setStep={setStep} />;
            case 4: return <Step4Locations setStep={setStep} />;
            case 5: return <Step5Airport setStep={setStep} />;
            case 6: return <Step6Result setStep={setStep} />;
            default: return null;
        }
    };


    return (
        <FormProvider>
            <div className="app-panel">
                <div className="max-w-xl mx-auto p-6">
                    {renderStep()}
                </div>
            </div>
        </FormProvider>
    );
}