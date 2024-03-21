import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
export default function SearchBar() {
    return (
        <div>
            <div className=' m-auto h-96 bg-gradient-to-r from-sky-600 to-red-600 rounded-3xl '>
            <div className='text-white  align-middle w-fit m-auto'>
            <div className="text-4xl font-bold m-auto w-fit pt-60">
                Search for your next job
            </div>
            <p className='pt-4 w-2/3 m-auto text-center' >
                When you're searching for a job, there are a few things you can do to get the most out of your search 
            </p>
            </div>
                <div className='w-2/3 h-14 m-auto mt-5 flex border-2 border-gray-300 bg-white rounded-full  items-center'>
                    <button title="Search" className='bg-green-500 rounded-full w-11 h-11 mx-2 my-2'><SearchIcon/></button>
                    <input type="text" className='w-96' placeholder="Job title, keyword or company"/>
                </div>
            </div>
            <div className='mt-14 text-center'>You can also <Link href='' className='font-bold'>Post a Job</Link> or <Link href='' className='font-bold'>Post your resume</Link></div>
        </div>
    );
}