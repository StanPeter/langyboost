export const particleConfig = {
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
                    src: "/images/q.png",
                },
                {
                    src: "/images/w.png",
                },
                {
                    src: "/images/e.png",
                },
                {
                    src: "/images/r.png",
                },
                {
                    src: "/images/t.png",
                },
                {
                    src: "/images/y.png",
                },
                {
                    src: "/images/u.png",
                },
                {
                    src: "/images/i.png",
                },
                {
                    src: "/images/o.png",
                },
                {
                    src: "/images/p.png",
                },
                {
                    src: "/images/a.png",
                },
                {
                    src: "/images/s.png",
                },
                {
                    src: "/images/d.png",
                },
                {
                    src: "/images/f.png",
                },
                {
                    src: "/images/g.png",
                },
                {
                    src: "/images/h.png",
                },
                {
                    src: "/images/j.png",
                },
                {
                    src: "/images/k.png",
                },
                {
                    src: "/images/l.png",
                },
                {
                    src: "/images/z.png",
                },
                {
                    src: "/images/x.png",
                },
                {
                    src: "/images/c.png",
                },
                {
                    src: "/images/v.png",
                },
                {
                    src: "/images/b.png",
                },
                {
                    src: "/images/n.png",
                },
                {
                    src: "/images/m.png",
                },
                {
                    src: "/images/c.png",
                },
                {
                    src: "/images/c.png",
                },
            ],
            // type: "circle",
            // stroke: {
            //     width: 0,
            //     color: "#000000",
            // },
            // polygon: {
            //     nb_sides: 5,
            // },
            // image: {
            //     src: "img/github.svg",
            //     width: 100,
            //     height: 100,
            // },
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
                speed: 3,
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
