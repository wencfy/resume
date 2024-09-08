import React from "react";

export const Tag = ({
    children, className, ...restProps
}: React.PropsWithChildren & {
    className?: string;
}) => {
    return <span className={`bg-indigo-50 text-indigo-500 text-xs font-light me-2 px-1 py-0.5 rounded ${className}`} {...restProps}>
        {children}
    </span>
}