import { resolve } from "path"

export default async function About() {
    await new Promise ((resolve)=>{
        setTimeout(resolve, 5000);
    })

    return <div className=" bg-slate-400">
        <h1 className="text-3xl animate-bounce h-10 text-center pt-5 font-serif">Floyd Caldeira</h1>
        <br />
        <p>Current Designaion: PA to Head of School</p>
        <br />
        <p>Interests: Day Trader</p>
        <br />
        <p>Other Interests: Coding Enthusiast</p>
    </div>
};