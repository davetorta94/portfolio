import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
      <>

<Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#18131f",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#CCFF00",
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "polygon",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#000",
                        opacity: 0.8,
                    }
                },
                detectRetina: true,
            }}
        />
        

      </>
        
    );
};

//<Particles
//            id="tsparticles"
//            init={particlesInit}
//            loaded={particlesLoaded}
//            options={{
//                background: {
//                    color: {
//                        value: "#18131f",
//                    },
//                },
//                fpsLimit: 120,
//                interactivity: {
//                    events: {
//                        onClick: {
//                            enable: true,
//                            mode: "push",
//                        },
//                        resize: true,
//                    },
//                    modes: {
//                        push: {
//                            quantity: 4,
//                        },
//                        repulse: {
//                            distance: 200,
//                            duration: 0.4,
//                        },
//                    },
//                },
//                particles: {
//                    color: {
//                        value: "#ffffff",
//                    },
//                    move: {
//                        direction: "none",
//                        enable: true,
//                        outModes: {
//                            default: "bounce",
//                        },
//                        random: false,
//                        speed: 0.2,
//                        straight: false,
//                    },
//                    number: {
//                        density: {
//                            enable: true,
//                            area: 800,
//                        },
//                        value: 80,
//                    },
//                    opacity: {
//                        value: 0.5,
//                    },
//                    shape: {
//                        type: "circle",
//                    },
//                    size: {
//                        value: { min: 1, max: 5 },
//                    },
//                },
//                detectRetina: true,
//            }}
//        />