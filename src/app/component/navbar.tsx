import Link from 'next/link';
export default function Navbar (){
return (
<div className='bg-blue-950 h-12 text-blue-300 flex justify-between items-center'>
    <h1 className='text-xl m-2'>My Resume</h1>
<ul className='flex gap-4 mr-4'>
<Link href='/'>Home</Link>
<br/>
<Link href='/about'>About</Link>
<br/>
<Link href='/experience'>Experience</Link>
<br/>
<Link href='/qualification'>Qualification</Link>
<br/>
<Link href='/contact'>Contact</Link>
<br/>
<Link href='/contact/email'>Email</Link>
<br/>
</ul>
</div>
);
}