import { useState, useEffect } from 'react'

export function useFetchData(chapter) {
    const [chapterData, setChapterData] = useState([]);
    if(chapter){
        useEffect(() => {
            fetch('/data/Chapter1Data.json')
                .then(response => response.json())
                .then(data => setChapterData(data[chapter]))
                .catch(error => console.error('JSON読込エラー', error));
        },[chapter]);    
    }else{
        useEffect(() => {
            fetch('/data/Chapter1Data.json')
                .then(response => response.json())
                .then(data => setChapterData(data))
                .catch(error => console.error('JSON読込エラー', error));
        },[]);    
    }
    return (chapterData)
}