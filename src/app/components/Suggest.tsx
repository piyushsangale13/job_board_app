import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
interface HomeProps {
    title: string;
  }
export default function Home({title} : HomeProps) {
    return (
        <Link href='' className=' rounded-full border-2 border-gray-300 flex  w-max p-2  text-sm  items-center' >
            <h1 className='mx-2'>{title}</h1>
            <SearchIcon className='mx-0'/>
        </Link>
    );
}