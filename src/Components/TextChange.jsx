
import { useEffect, useState} from 'react'

const TextChange = () => {

  const texts = ["Hi, I'm Pooja K H", "Hi, I'm Pooja K H", "Hi, I'm Pooja K H"]  
  const [currentText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(true);
  const [isFoward, setIsFoward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentText(texts[index].substring(0, endValue))
        if(isFoward){
            setendValue((prev)=>prev+1);
        }else{
            setendValue((prev) => prev-1);
        }

        if(endValue > texts[index].length+10){
            setIsFoward(false);
        }

        if(endValue < 2.1){
            setIsFoward(true);
            setIndex((prev)=>prev&texts.length);
        }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isFoward, index, texts]);

  return (
    <div className='transition ease duration-300'>
      {currentText}
    </div>
  );
}

export default TextChange
