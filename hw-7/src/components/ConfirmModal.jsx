import { useEffect, useRef } from "react";

function ConfirmModal({ onConfirm, onCancel }) {
    const modalRef = useRef();

    useEffect(() => {
        modalRef.current.focus();

        const handleEsc = (e) => {
            if (e.key === "Escape") onCancel();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onCancel]);

    return (
        <div
            className="modal-overlay"
            style={{
                position: "fixed",
                top: 0, left: 0,
                width: "100%", height: "100%",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onClick={onCancel}
            tabIndex={-1}
            ref={modalRef}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{ background: "white", padding: "20px", borderRadius: "5px" }}
            >
                <p>Ви впевнені, що хочете видалити завдання?</p>
                <button onClick={onConfirm}>Так</button>
                <button onClick={onCancel} style={{ marginLeft: "10px" }}>Ні</button>
            </div>
        </div>
    );
}

export default ConfirmModal;
