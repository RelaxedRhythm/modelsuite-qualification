import { useState } from "react";

const getInitials=(name="")=>{
    return(
        name.trim()
            .split(/\s+/)
            .map((part)=>part[0])
            .join("")
            .toUpperCase()
            .slice(0,2) || "?"
            
    );
};

const Avatar=({name,src,alt,className,style})=>{
    const [imageError,setImageError]=useState(false);

    // useEffect(()=>{
    //     setImageError(false);
    // },[src]);

    const showImage= src && !imageError;

    if(!showImage){
        return (
            <div  className={`${className} flex items-center justify-center rounded-full font-bold text-white select-none`}
            style={style}
            >
                {getInitials(name)}
            </div>
        );
    }

    return (
        <img
        src={src} 
        className={`${className} rounded-full object-cover`}
        alt={alt}
        style={style}
        onError={()=>setImageError(true)}
        />
    )
}

export default Avatar;