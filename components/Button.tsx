import Image from "next/image"

type ButtonProps ={
    type: 'button' | 'submit';
    title: string;
    icon?: string; // ? = meaning optional
    variant: string;
    full?: boolean // ? = meaning optional

}

const Button = ({type, icon, title, variant, full}: ButtonProps) => {
  return (
    <button 
    type={type}
    className={`flexCenter gap-3 rounded-full border
    ${variant} ${full && 'w-full'}`}
    >
       {
       icon && 
       <Image 
       src={icon}
       alt={title}
       height={25}
       width ={25}
       />
       }
       <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
       </label>
    </button>
  )
}

export default Button