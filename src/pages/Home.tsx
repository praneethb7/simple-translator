import InputBar from "@/components/InputBar";
import { useState } from "react";
import TranslateButton from "@/components/TranslateButton";
import { translateText } from "@/lib/translateService";
import OutputBox from "@/components/OutputBox";

const Home = () =>{

    const [inputText,setInputText] = useState("");
    const [sourceLang,setSourceLang] = useState("");
    const [targetLang,setTargetLang] = useState("");
    const [result,setResult] = useState("");

    const handleTranslate = async () => {
  if (!inputText.trim()) {
    setResult("⚠️ Please enter some text to translate.");
    return;
  }

  if (!sourceLang || !targetLang) {
    setResult("⚠️ Please select both source and target languages.");
    return;
  }

  if (sourceLang === targetLang) {
    setResult("⚠️ Source and Target languages are the same.");
    return;
  }

  const translation = await translateText(inputText, sourceLang, targetLang);
  setResult(translation); 
};

    return(
        <div className="max-w-xl mx-auto py-10 space-y-6">
      <h1 className="text-2xl font-bold text-center">🌐 Language Translator</h1>
        <InputBar inputText={inputText} setInputText={setInputText} sourceLang={sourceLang} setSourceLang={setSourceLang} targetLang={targetLang} setTargetLang={setTargetLang}/>
        <TranslateButton onClick={handleTranslate}/>
        <OutputBox result={result}/>
         </div>
    );
}

export default Home;


