import { IoAlertCircleOutline } from 'react-icons/io5';

export default function ErrorMessage() {
    return (
        <div className="mt-2 flex text-red-500 items-center">
            <div>
                <IoAlertCircleOutline />
            </div>
            <div>This is a required field.</div>
        </div>
    );
}
