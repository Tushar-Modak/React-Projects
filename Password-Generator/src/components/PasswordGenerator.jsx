import React, { useEffect, useRef, useState } from 'react'

export default function PasswordGenerator() {
    const [numberIsAllowed, setNumberAllowance] = useState(false);
    const [characterIsAllowed, setCharacterAllowance] = useState(false);
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState('');
    const [buttonName, setButtonNme] = useState('Copy');
    const [buttonColor, setButtonColor] = useState('bg-blue-700');
    const inputRef=useRef(null);

    const passwordGenerator=()=>{
        let pass='';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(numberIsAllowed) str += '123456789';
        if(characterIsAllowed) str += '!@#$%^&*-_+=[]{}~`';

        for(let i=0;i<length;i++)
        {
            let randomIndex = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(randomIndex);
        }
        
        setPassword(pass);
    }
    useEffect(()=>{
        console.log('inside effect');
        passwordGenerator();
    },[length, numberIsAllowed, characterIsAllowed]);

    const copyToClipBoard= ()=>{
        inputRef.current?.select();
        window.navigator.clipboard.writeText(password);
        setButtonNme('Copied');
        setButtonColor('bg-green-700');
        setInterval(()=>{
            setButtonNme('Copy');
            setButtonColor('bg-blue-700');
        }, 2000);

    }

    return (
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
                className="outline-none w-full py-1 px-3"
                value={password}
                ref={inputRef}
                readOnly
            />
            <button
            className={`outline-none ${buttonColor} text-white px-3 py-0.5 shrink-0`}
            onClick={copyToClipBoard}
            >{buttonName}</button>
        </div>
        <div className='flex text-sm gap-x-4'>
            <div className='flex items-center gap-x-1'>
                <input 
                    className='cursor-pointer'
                    type='range'
                    min={8}
                    max={32}
                    value={length}
                    onChange={(e)=>{
                    setLength(e.target.value);
                }}/>
                <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input type='checkbox' onChange={()=>{
                    setCharacterAllowance((prev)=> !prev);
                }}/>
                <label htmlFor="characterInput">Characters</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input type='checkbox' onChange={()=>{
                    setNumberAllowance((prev)=> !prev);
                }}/>
                <label htmlFor="numberInput">Numbers</label>
            </div>
        </div>
        </div>
    )
}
