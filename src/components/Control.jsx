import Button from "./Button";

export default function Control({ increment, reset, decrement}) {
    return (
        <div className="flex gap-8">
            <Button onClick={increment}>
                add +1
            </Button>
            <Button onClick={reset}>
                reset
            </Button>
            <Button onClick={decrement}>
                add -1
            </Button>
        </div>
    )
}