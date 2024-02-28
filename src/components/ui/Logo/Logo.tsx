import { cn } from "libs";

type LogoProps = {
    className?: string;
};

export const Logo = ({ className }: LogoProps) => {
    return (
        <dl
            className={cn(
                "flex flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-b-red-100 pb-0.5 pl-2 pr-2 pt-0.5" +
                    " hover:-translate-y-1",
                className
            )}
        >
            <dt className="text-xl font-bold">Yūgen</dt>
            <dd className="text-sm font-medium">幽玄</dd>
        </dl>
    );
};
