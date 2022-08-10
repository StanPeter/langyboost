export const particleConfig: object = {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 1500,
            },
        },
        color: {
            value: "#FAFBFF",
        },
        shape: {
            type: "images",
            image: [
                //for some reason takes the root directory instead of src -> created public/images folder
                {
                    src: "/images/particles/q.png",
                },
                {
                    src: "/images/particles/w.png",
                },
                {
                    src: "/images/particles/e.png",
                },
                {
                    src: "/images/particles/r.png",
                },
                {
                    src: "/images/particles/t.png",
                },
                {
                    src: "/images/particles/y.png",
                },
                {
                    src: "/images/particles/u.png",
                },
                {
                    src: "/images/particles/i.png",
                },
                {
                    src: "/images/particles/o.png",
                },
                {
                    src: "/images/particles/p.png",
                },
                {
                    src: "/images/particles/a.png",
                },
                {
                    src: "/images/particles/s.png",
                },
                {
                    src: "/images/particles/d.png",
                },
                {
                    src: "/images/particles/f.png",
                },
                {
                    src: "/images/particles/g.png",
                },
                {
                    src: "/images/particles/h.png",
                },
                {
                    src: "/images/particles/j.png",
                },
                {
                    src: "/images/particles/k.png",
                },
                {
                    src: "/images/particles/l.png",
                },
                {
                    src: "/images/particles/z.png",
                },
                {
                    src: "/images/particles/x.png",
                },
                {
                    src: "/images/particles/c.png",
                },
                {
                    src: "/images/particles/v.png",
                },
                {
                    src: "/images/particles/b.png",
                },
                {
                    src: "/images/particles/n.png",
                },
                {
                    src: "/images/particles/m.png",
                },
                {
                    src: "/images/particles/c.png",
                },
                {
                    src: "/images/particles/c.png",
                },
            ],
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.4,
                sync: false,
            },
        },
        size: {
            value: 50,
            random: true,
            anim: {
                enable: true,
                speed: 5,
                size_min: 20,
                sync: true,
            },
        },
        line_linked: {
            enable: false,
            distance: 100,
            color: "#203a4f",
            opacity: 0.5,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 200,
                size: 20,
                duration: 1.5,
                opacity: 0.990734199007641,
            },
            repulse: {
                distance: 150,
                duration: 0.4,
            },
            push: {
                particles_nb: 6,
            },
            remove: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
};
