export const particleConfig: object = {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 1500
            }
        },
        color: {
            value: '#FAFBFF'
        },
        shape: {
            type: 'images',
            image: [
                //for some reason looks only in public instead of src -> created public/particles folder
                {
                    src: '/particles/q.png'
                },
                {
                    src: '/particles/w.png'
                },
                {
                    src: '/particles/e.png'
                },
                {
                    src: '/particles/r.png'
                },
                {
                    src: '/particles/t.png'
                },
                {
                    src: '/particles/y.png'
                },
                {
                    src: '/particles/u.png'
                },
                {
                    src: '/particles/i.png'
                },
                {
                    src: '/particles/o.png'
                },
                {
                    src: '/particles/p.png'
                },
                {
                    src: '/particles/a.png'
                },
                {
                    src: '/particles/s.png'
                },
                {
                    src: '/particles/d.png'
                },
                {
                    src: '/particles/f.png'
                },
                {
                    src: '/particles/g.png'
                },
                {
                    src: '/particles/h.png'
                },
                {
                    src: '/particles/j.png'
                },
                {
                    src: '/particles/k.png'
                },
                {
                    src: '/particles/l.png'
                },
                {
                    src: '/particles/z.png'
                },
                {
                    src: '/particles/x.png'
                },
                {
                    src: '/particles/c.png'
                },
                {
                    src: '/particles/v.png'
                },
                {
                    src: '/particles/b.png'
                },
                {
                    src: '/particles/n.png'
                },
                {
                    src: '/particles/m.png'
                },
                {
                    src: '/particles/c.png'
                },
                {
                    src: '/particles/c.png'
                }
            ]
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.4,
                sync: false
            }
        },
        size: {
            value: 50,
            random: true,
            anim: {
                enable: true,
                speed: 5,
                size_min: 20,
                sync: true
            }
        },
        line_linked: {
            enable: false,
            distance: 100,
            color: '#203a4f',
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 20,
                duration: 1.5,
                opacity: 0.990734199007641
            },
            repulse: {
                distance: 150,
                duration: 0.4
            },
            push: {
                particles_nb: 6
            },
            remove: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
};
