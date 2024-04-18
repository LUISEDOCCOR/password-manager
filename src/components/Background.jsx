import { useEffect, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export const Background = () =>{
    const [vanta, setVanta] = useState(null);

    useEffect(() => {
     
        if(!vanta) return
 
        const vantaEffect= NET({
            el: vanta,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 0.5,
            scaleMobile: 1.0,
        });
        
        return () => {
            if (!(vantaEffect instanceof Object)) return;
            if (!('destroy' in vantaEffect)) return;
            if (typeof vantaEffect.destroy !== 'function') return;
            vantaEffect.destroy();;
        };
    
    }, [vanta]);
 
    return (
        <div ref={setVanta} style={{ width: '100%', height: '100vh' }}></div>
    )
}