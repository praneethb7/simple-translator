import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";

interface InputBarProps {
    inputText : string,
    setInputText : (val : string) => void,
    sourceLang : string,
    setSourceLang : (val: string) => void,
    targetLang : string,
    setTargetLang : (val : string) => void
}

const InputBar= ({inputText,setInputText,sourceLang,setSourceLang,targetLang,setTargetLang}: InputBarProps) =>{
    return(
        <div className="space-y-4">
            <Input placeholder="Enter text to translate" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
            <div className="flex gap-4">
                <Select onValueChange={setSourceLang}>
                    <SelectTrigger>
                        <SelectValue placeholder="Source Language"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                </Select>
                
                <Select onValueChange={setTargetLang}>
                    <SelectTrigger>
                        <SelectValue placeholder="Target Language"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
export default InputBar;