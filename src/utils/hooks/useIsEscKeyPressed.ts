import { useEffect, useState } from 'react';

const useIsEscKeyPressed = () => {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        const upHandler = event => {
            const key = event.key || event.keyCode;

            if (key === 'Escape' || key === 'Esc' || key === 27) {
                setKeyPressed(true);
            } else {
                setKeyPressed(false);
            }
        };

        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keyup', upHandler);
        };
    }, []);

    return keyPressed;
};

export { useIsEscKeyPressed };
