import { Loader } from "rizzui";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-[90vh]">
            <Loader color="primary" size="xl" />
        </div>
    );
}
