import Image  from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
interface ModalProps {
    logo: string;
    title: string;
    description: string;
    location: string;
    company: string;
    isVisible: boolean;
    onClose: () => void
  }
export default function Modal({isVisible, onClose, logo, title, description, location, company} : ModalProps) {
    function handleClick(){
        return {onClose};
      };
    if(!isVisible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-1/3 bg-white p-4 rounded-2xl flex flex-col items-center">
                <div className='w-full flex justify-between mt-0'>
                    <Image className='rounded-full ' src={logo} alt='' width={50} height={50}/>
                    <div className=''>
                        <h1 className='font-bold'>{title}</h1>
                        <p>{location} • {company} </p> 
                    </div>
                    <button title='close' className='' onClick={handleClick}>
                        <CloseIcon/>
                    </button>
                </div>
                <div>
                    <h1 className='font-bold my-5'>Description</h1>
                    <p>{description}</p>

                </div>
                <button title='apply now' className='mt-10 bg-orange-600 rounded-full w-48 p-2 justify-center text-white'>Apply Now</button>
            </div>
        </div>
    );
}