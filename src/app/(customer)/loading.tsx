import { Loader } from "rizzui";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-[80vh]">
            <Loader color="primary" />
        </div>
    );
}
