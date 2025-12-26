export default function NavigationButtons({ onNext, onBack, nextLabel = "次へ" }) {
    return (
        <div className="flex justify-between mt-6">
            {onBack && (
                <button onClick={onBack} className="px-4 py-2 border rounded">戻る</button>
            )}
            <button onClick={onNext} className="px-4 py-2 bg-black text-white rounded">
                {nextLabel}
            </button>
        </div>
    );
}