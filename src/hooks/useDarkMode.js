import {useEffect} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


 export const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if (enabled === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [enabled]); 
    

    const toggleDarkMode = e => {
        e.preventDefault();

        return enabled ? setEnabled(false) : enabled(true);
    };


    return [ enabled, setEnabled, toggleDarkMode];

};