import { Button } from "./ui/button";

interface TranslateButtonProps {
    onClick : () => void
}

const TranslateButton = ({onClick}:TranslateButtonProps) =>{
    return(<Button onClick={onClick} className="w-full mt-4">Translate! 🤟</Button>);
}
export default TranslateButton;