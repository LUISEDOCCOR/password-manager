// import { useRef, useEffect } from "react"
// import NET from 'vanta/dist/vanta.net.min';
// import * as THREE from 'three';

// export const Background = () =>{

//     const vantaRef = useRef(null);

//     useEffect(() => {
        
//         if(!vantaRef) return
    
//         const vantaEffect= NET({
//             el: vantaRef.current,
//             THREE,
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 200.00,
//             minWidth: 200.00,
//             scale: 1.00,
//             scaleMobile: 1.00
//         });
//         return () => {
//             vantaEffect.destroy();
//         };
//     }, []);
    
//     return (
//         <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}></div>
//     )
// }