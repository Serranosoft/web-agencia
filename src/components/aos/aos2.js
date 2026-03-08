import { useEffect } from "react"

export default function Aos2() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.querySelector(".aos-effect2-el") !== null) {
                        entry.target.querySelector(".aos-effect2-el").classList.add("aos-effect2")
                    } else {
                        entry.target.classList.add("aos-effect2");
                    }
                }
            })
        }, { threshold: 0.1 })

        let elements = document.querySelectorAll(".aos-effect2-observer");
        elements.forEach((el) => observer.observe(el));
    }, [])

    return (
        <></>
    )
}