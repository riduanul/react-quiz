
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useAnswers = (videoID) => {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [answers, setAnswers] = useState([]);
    
    useEffect(() => {
        async function fetchAnswers() {
            // database related works
            const db = getDatabase();
            const answerRef = ref(db, "answers/" + videoID + "/questions");
            const answerQuery = query(
                answerRef,
                orderByKey(),
                
            );

            try {
                    setError(false);
                    setLoading(true);
                    // request firebase database
                    const snapshot = await get(answerQuery);
                    setLoading(false);
                    if(snapshot.exists()) {
                        setAnswers((prevAnswers) => {
                            return [...prevAnswers, ...Object.values(snapshot.val())]
                        })
                    } 

            } catch(err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchAnswers();
    }, [videoID])
    return {
        loading,
        error,
        answers,
        
    }
};

export default useAnswers;