import { usePathname } from "next/navigation"
import { useMemo } from "react"

const useNavRoutes =() =>{
    const pathname = usePathname()
    const routes = useMemo(()=>[
        {
            route : '/',
            label : "Home",
            isActive : pathname === "/"
        },
        {
            route : '/find/jobs',
            label : "Find Jobs",
            isActive : pathname === "/find/jobs"
        },
        {
            route : '/find/talents',
            label : "Find Talents",
            isActive : pathname === "/find/talents"
        },
        {
            route : '/about',
            label : "About us",
            isActive : pathname === "/about"
        },
        {
            route : '/testimonials',
            label : "Testimonials",
            isActive : pathname === "/testimonials"
        },
       
    ],[pathname])

    return routes
}

export default useNavRoutes