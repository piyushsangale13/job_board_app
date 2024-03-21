import Link from 'next/link';
export default function Footer() {
  return (
    <div className='m-auto w-2/3 h-40 border-t-2 '>
        <div className= 'grid grid-cols-4 font-bold mt-4 '>
            <div>Booking Support</div>
            <div>Community</div>
            <div>About</div>
            <div>Become an employer</div>
        </div>
        <div className= 'grid grid-cols-4'>
            <div>Covid-19</div>
            <div>Against Discrimination</div>
            <div>How it works</div>
            <div>Post your job</div>
            <div>Help Center</div>
            <div>Invite Friends</div>
            <div>Careers</div>
            <div>Business Account</div>
            <div>Support</div>
            <div>Gift cards</div>
            <div>About us</div>
            <div>Resource center</div>
            <div>Trust & Safety</div>
            <div></div>
            <div>Media</div>
            <div>Community</div>
        </div>
        <div className=' space-x-4'>
            <Link href=''>Privacy Policy</Link>
            <Link href=''>License</Link>
            <Link href=''>API</Link>
            <Link href=''>English</Link>
        </div>
    </div>
  );
}
