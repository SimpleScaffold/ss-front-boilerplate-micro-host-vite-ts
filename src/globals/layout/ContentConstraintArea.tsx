import { useRef, type ReactNode } from 'react'
import { useModalConstraintRef } from './hooks/useModalConstraintRef'

const CONTENT_ROOT_CLASS =
    'relative flex h-full w-full flex-col overflow-hidden'

export const ContentConstraintArea = ({
    children,
}: {
    children: ReactNode
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    useModalConstraintRef(containerRef)

    return (
        <div ref={containerRef} className={CONTENT_ROOT_CLASS}>
            {children}
        </div>
    )
}
