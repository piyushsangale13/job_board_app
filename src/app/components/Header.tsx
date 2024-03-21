import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
export default function Home() {

    return (
        <nav className='w-2/3 m-auto'>
            
            <div className=' py-8 justify-around items-center flex  h-12  mx-0 border-b-2'>
                <Avatar />
                <Link href="">
                    Feed
                </Link>
                <Link href="">
                    Contacts
                </Link>
                <Link href=""className='font-bold'>
                    Jobs
                </Link>
                <Link href="">
                    Messages
                </Link>
                <Link href="">
                    Updates
                </Link>
                <NotificationsIcon/>
                <Avatar/>
            </div>
        </nav>
    );
  }
  