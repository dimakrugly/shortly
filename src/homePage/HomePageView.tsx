import './background.css';
import React from "react";

interface Props {
    link: string;
    setLink: (text: string) => void;
    handlePost: () => void;
}
export const HomePageView: React.FC<Props> = ({link, setLink, handlePost}) => (
    <>
        <div className="flex flex-col items-center justify-center h-screen w-screen z-1 absolute gap-1 z-10">
            <h2 className="text-black text-3xl">Shortly!</h2>
            <p>Provide a link to shortify</p>
            <div className="flex gap-2">
                <input type="text" className="rounded p-1 outline-none" value={link} onChange={e => setLink(e.target.value)} />
                <button className="bg-amber-200 rounded p-1" onClick={handlePost}>Shortify</button>
                <button className="bg-red-500 rounded p-1">Reset</button>
            </div>
        </div>
        <ul className="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </>
)
