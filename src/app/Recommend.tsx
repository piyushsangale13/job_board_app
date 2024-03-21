import SearchIcon from '@mui/icons-material/Search';
import Image  from 'next/image';
import Modal from "./Modal";
import Link from 'next/link';
import { useState } from 'react';

interface HomeProps {
    logo: string;
    title: string;
    description: string;
    location: string;
    company: string;
    salary: string;
  }
export default function Home({logo, title, description, location, company, salary} : HomeProps) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='border-2 rounded-2xl h-64  w-80 p-8 space-y-3' onClick={()=>setShowModal(true)}>
            <Image className='rounded-full mb-8' src={logo} alt='' width={50} height={50}/>
            <h1 className='font-bold'>{title}</h1>
            <p>{location} • {company} </p> 
            <div className='font-bold rounded-full border-2 border-gray-300  align-middle p-2  w-max'>{salary} per month</div>
            <Modal 
                isVisible =  {showModal}
                onClose = {()=> {setShowModal(false); return void 0;}}
                logo={logo}
                title={title}
                description = {description}
                location= {location}
                company= {company}
            />
        </div>
    );
}