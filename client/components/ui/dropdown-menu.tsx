"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

// Root
export const DropdownMenu = DropdownMenuPrimitive.Root;

// Trigger
export const DropdownMenuTrigger =
    DropdownMenuPrimitive.Trigger;

// Content
export const DropdownMenuContent: React.FC<
    React.ComponentProps<typeof DropdownMenuPrimitive.Content> & {
    className?: string;
    sideOffset?: number;
}
> = ({ className, sideOffset = 4, ...props }) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            sideOffset={sideOffset}
            className={cn(
                "z-50 min-w-[8rem] rounded-md border bg-popover p-1 shadow-md",
                className
            )}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
);

// Item
export const DropdownMenuItem: React.FC<
    React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    className?: string;
}
> = ({ className, ...props }) => (
    <DropdownMenuPrimitive.Item
        className={cn(
            "cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm outline-none",
            "hover:bg-accent hover:text-accent-foreground",
            className
        )}
        {...props}
    />
);

// Separator
export const DropdownMenuSeparator: React.FC<
    React.ComponentProps<typeof DropdownMenuPrimitive.Separator>
> = (props) => (
    <DropdownMenuPrimitive.Separator
        className="my-1 h-px bg-border"
        {...props}
    />
);
