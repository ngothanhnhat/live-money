import { useState } from 'react'

const useOpen = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return { isOpen, toggle }
}

export default useOpen;