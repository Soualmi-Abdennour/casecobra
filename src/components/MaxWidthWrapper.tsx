import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

function MaxWidthWrapper({className,children}:{className?:string,children:ReactNode}) {
    return (
        <div className={cn("h-full w-full max-w-screen-xl mx-auto px-2.5 md:px-20",className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper
