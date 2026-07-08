import { useEffect, type RefObject } from 'react'
import { useModalConstraint } from 'src/globals/layout/ModalConstraintContext'

export function useModalConstraintRef(
    containerRef: RefObject<HTMLDivElement | null>,
): void {
    const setConstraintRef = useModalConstraint()?.setConstraintRef

    useEffect(() => {
        setConstraintRef?.(containerRef)
        return () => setConstraintRef?.(null)
    }, [setConstraintRef, containerRef])
}
