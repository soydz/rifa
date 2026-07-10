import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
}

export function Button({ className, children, ...props }: Readonly<ButtonProps>) {
    return (
        <button
            className={`border rounded-lg py-2.5 px-4 hover:bg-gray-800 hover:text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}